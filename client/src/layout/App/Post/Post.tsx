import React from 'react';
import axios from "axios";
import Card from "../../../components/Card/Card";
import Comments from './Comments';
import styles from "./styles.module.scss";
import HashLoader from "react-spinners/HashLoader";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux";
import FourOFour from "../404";

interface IProps {
    match?: any
    token?: string
}

type TDataItem = {
    author: string
    authorID: string
    description?: string
    title: string
    date: string
    theme: string
}
type TCommentItem = {
    _id?: string
    author?: string
    text?: string
}

interface IState {
    loading: boolean
    isAuth: boolean
    data: TDataItem | null,
    comments: TCommentItem[] | null
}


class _Post extends React.Component<IProps, IState> {
    state = {
        loading: true,
        isAuth: false,
        data: {
            author: '',
            authorID: '',
            description: '',
            title: '',
            theme: '',
            date: ''
        },
        comments: []
    }

    async componentDidMount() {
        const data = (await axios(`/api/posts/${this.props.match.params.id}`)).data
        const comments = (await axios(`/api/comments/${this.props.match.params.id}`)).data
        const {token} = this.props
        window.setTimeout(() => this.setState(
            {data: data, loading: false, comments: comments}), 900)
        try {
            await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})
            this.setState({isAuth: true})
        } catch (e) {
            this.setState({isAuth: false})
        }
    }

    render() {
        const {loading, isAuth, comments, data: {author, authorID, description, title, theme}} = this.state
        return (
            <div className={styles.content}>
                {loading
                    ? <div className={styles.loader}>
                        <HashLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#36d7b7'}
                            loading={loading}
                        />
                    </div>
                    : author
                        ? <>
                            <Card
                                author={author}
                                authorID={authorID}
                                description={description}
                                title={title}
                                theme={theme}
                            />
                            <Comments postId={this.props.match.params.id}
                                      comments={comments}
                                      isAuth={isAuth}/>
                        </>
                        : <FourOFour/>
                }
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Post = connect(mapStateToProps)(_Post)

export default Post