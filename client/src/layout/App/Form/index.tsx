import React from 'react'
import {Form, Field} from 'react-final-form'
import {Button, Form as UIForm} from 'semantic-ui-react'
import styles from './styles.module.scss';
import axios from "axios";
import historyService from "../../../services/historyService";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux";


interface IProps {
    match?: any
    token?: string
    id?: string
}

interface TItem {
    title?: string
    author?: string
    description?: string
    theme?: string
}

interface IState {
    isAuth: boolean
    token?: string
    updating?: boolean
    data: {
        description: string
        title: string
    }
}


class _WishForm extends React.Component<IProps, IState> {
    state = {
        isAuth: false,
        updating: false,
        data: {
            description: '',
            title: '',
            theme: ''
        }
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
        const {token} = nextProps
        if (!token) return {...prevState, isAuth: false}
        return (token !== prevState.token) ? {...prevState, token, isAuth: true} : null
    }

    async componentDidMount() {
        const {token} = this.props
        const isAuth = (await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})).data
        if (isAuth) this.setState({isAuth})
        if (this.props.match.params.id) this.setState({updating: true}) //Если обратились по id => редактируем
        if (this.state.updating) {
            const data = (await axios(`/api/posts/${this.props.match.params.id}`)).data
            this.setState({data: data})
        }
    }

    onUpdate = async (values: TItem) => {
        const {author, title, description, theme} = values
        try {
            await axios.put(`/api/posts/${this.props.match.params.id}`, {author, title, description, theme})
            alert('Updated successfully!')
            historyService.history!.push('/private')
        } catch (e) {
            alert('Something goes wrong! Try again!')
        }
    }

    onSubmit = async (values: TItem) => {
        const {author, title, description, theme} = values
        const {token} = this.props
        try {
            await axios.post(`/api/posts/`, {author, title, description, theme}, {headers: {'auth-token': token}})
            historyService.history!.push('/')
        } catch (e) {
            alert('Something goes wrong! Try again!')
        }
    }

    render() {
        const author = this.props.id
        const {data: {title, description, theme}, updating, isAuth} = this.state
        return (
            <div className={styles.root}>
                {isAuth
                    ? <Form
                        onSubmit={updating ? this.onUpdate : this.onSubmit}
                        initialValues={{author, title, description, theme}}
                        validate={(values: TItem) => {
                            const errors: TItem = {}
                            if (!values.title) {
                                errors.title = 'Required'
                            }
                            if (!values.description) {
                                errors.description = 'Required'
                            }
                            if (!values.theme) {
                                errors.theme = 'Required'
                            }
                            return errors
                        }}
                        render={({handleSubmit, submitting, pristine, hasValidationErrors}) => (
                            <UIForm onSubmit={handleSubmit}>
                                <Field name="title">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Your wish</label>
                                            <input {...input} type="text" placeholder="Type your wish here!"
                                                   className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="description">
                                    {({input, meta}) => (
                                        <div>
                                            <label>Description</label>
                                            <textarea {...input} placeholder="Add some description to your wish!"
                                                      className={meta.error && meta.touched ? styles.errorField : ''}/>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="theme">
                                    {({input, meta}) => (
                                        <div className={styles.select}>
                                            <label>Theme of your wish</label>
                                            <select {...input} placeholder={'Choose theme of your wish'}
                                                    className={meta.error && meta.touched ? styles.errorField : ''}>
                                                <option/>
                                                <option value="Drink">Drink</option>
                                                <option value="Walk">Walk</option>
                                                <option value="Cinema">Cinema</option>
                                                <option value="Concert">Concert</option>
                                                <option value="Outdoors">Outdoors</option>
                                                <option value="Chill">Chill</option>
                                                <option value="Travel">Travel</option>
                                                <option value="Game">Game</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {meta.error && meta.touched &&
                                            <span className={styles.error}>{meta.error}</span>
                                            }
                                        </div>
                                    )}
                                </Field>
                                <div className={styles.button}>
                                    <Button type='submit'
                                            disabled={submitting || pristine || hasValidationErrors}>Submit</Button>
                                </div>
                            </UIForm>
                        )}
                    />
                    : <h1>403 forbidden</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const WishForm = connect(mapStateToProps)(_WishForm)

export default WishForm