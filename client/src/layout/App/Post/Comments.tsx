import React from 'react'
import {Button, Comment, Form, Header} from 'semantic-ui-react'
import axios from 'axios'
import Commentary from './Comment'
import {IStore} from '../../../store/reducers'
import {connect} from 'react-redux'
import styles from './styles.module.scss'
import LoginDialog from '../Header/LoginDialog'
import RegisterDialog from '../Header/RegisterDialog'
import {Dispatch} from 'redux'
import {login} from '../../../store/actions'

type TDataItem = {
    author: string
    text: string
    date: string
    authorID: string
}

interface IProps {
    login?: (token: string, id: string) => void
    postId: string
    comments: TDataItem[]
    id?: string
    token?: string
    isAuth: boolean
}

interface IState {
    data: TDataItem[] | null
    textareaValue: string
    isAuth: boolean
}

class CommentsWithoutRedux extends React.Component<IProps, IState> {
    state = {
        textareaValue: '',
        data: this.props.comments || null,
        isAuth: this.props.isAuth,
    }

    async componentDidUpdate() {
        const {token} = this.props
        const {isAuth} = this.state
        try {
            await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})
            if (!isAuth) {
                this.setState({isAuth: true})
            }
        } catch (e) {
            if (isAuth) {
                this.setState({isAuth: false})
            }
        }
    }

    handleSubmit = async () => {
        const {textareaValue} = this.state
        const {token} = this.props
        if (textareaValue && token) {
            const res: TDataItem = (
                await axios.post(
                    `/api/comments/${this.props.postId}`,
                    {
                        authorID: this.props.id,
                        text: textareaValue,
                    },
                    {headers: {'auth-token': token}},
                )
            ).data
            if (this.state.data) {
                this.setState({data: [...this.state.data, res], textareaValue: ''})
            } else {
                this.setState({data: [res], textareaValue: ''})
            }
        }
    }

    handleTextAreaChange = (e: any) => {
        this.setState({textareaValue: e.target.value})
    }

    render() {
        const {login} = this.props
        const {data, isAuth} = this.state
        return (
            <div>
                <Comment.Group className={styles.comments}>
                    <Header as="h3" dividing>
                        Comments
                    </Header>
                    {data ? (
                        data.map((comment: TDataItem) => (
                            <Commentary
                                key={comment.date}
                                authorID={comment.authorID}
                                author={comment.author}
                                text={comment.text}
                                date={comment.date}
                            />
                        ))
                    ) : (
                        <p>You will be the first!</p>
                    )}
                    {!isAuth ? (
                        <div className={styles.buttonContainer}>
                            {login && <LoginDialog login={login} />} or <RegisterDialog />
                            {` `} to leave a comment
                        </div>
                    ) : (
                        <Form reply>
                            <Form.TextArea
                                onChange={(e: any) => this.handleTextAreaChange(e)}
                                value={this.state.textareaValue}
                                placeholder={'Type your reply here'}
                            />
                            <Button
                                content="Add Reply"
                                labelPosition="left"
                                icon="edit"
                                basic
                                onClick={this.handleSubmit}
                            />
                        </Form>
                    )}
                </Comment.Group>
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (token: string, id: string) => dispatch(login(token, id)),
})

const Comments = connect(mapStateToProps, mapDispatchToProps)(CommentsWithoutRedux)

export default Comments
