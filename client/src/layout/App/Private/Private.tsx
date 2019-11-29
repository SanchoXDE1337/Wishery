import React from 'react';
import axios from "axios";
import Card from "../../../components/Card/Card";
import historyService from "../../../services/historyService";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux";
import styles from './styles.module.scss'
import Button from "../../../components/Button";
import HashLoader from "react-spinners/HashLoader";


interface IProps {
    id?: string,
    token?: string
}

type TDataItem = {
    author: string
    authorID: string
    description: string
    title: string
    _id: string
    theme: string
    date?: string
}

interface IState {
    data: TDataItem[]
    isAuth: boolean
    loading: boolean
}


class _Private extends React.Component<IProps, IState> {
    state = {
        data: [],
        isAuth: false,
        loading: true
    }

    async componentDidMount() {
        const {token, id} = this.props
        try {
            const isAuth = (await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})).data
            const data = (await axios(`/api/private/${id}`, {headers: {'auth-token': token}})).data
            data.reverse()
            window.setTimeout(() => this.setState({isAuth, data, loading: false}), 900)
        } catch (e) {
            window.setTimeout(() => this.setState({isAuth: false, loading: false}), 900)
        }
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: IState) {
        const {token} = this.props
        const {isAuth} = this.state
        console.log(0)
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

    handleUpdate = (id: string) => {
        historyService.history!.push(`/posts/update/${id}`)
    }

    handleDelete = async (id: string) => {
        let confirmation = window.confirm('Are you sure want to delete this wish?')
        if (confirmation) {
            const result = this.state.data.filter((obj: TDataItem) => obj._id !== id)
            this.setState({data: result})
            await axios.delete(`/api/posts/${id}`)
        }
    }

    render() {
        const {isAuth, loading, data} = this.state
        return (
            <div>
                {loading
                    ? <div className={styles.loader}>
                        <HashLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#36d7b7'}
                            loading={loading}
                        />
                    </div>
                    : <div className={styles.content}>
                        {isAuth
                            ? <div>
                                <div>
                                    <div className={styles.addButton}>
                                        <Button
                                            onClick={() => historyService.history!.push('/private/settings')}
                                        ><i className="material-icons">build</i> Settings </Button>
                                    </div>
                                </div>
                                {!data
                                    ? <div>
                                        <h2>You have not any wishes :(</h2>
                                        <div className={styles.addButton}>
                                            <Button
                                                onClick={() => historyService.history!.push('/posts/add')}
                                            ><span className={styles.plus}>+</span>Add new Wish!</Button>
                                        </div>
                                    </div>
                                    : <div>
                                        <h2>Here you can Update & Delete your Wishes</h2>
                                        {this.state.data.map((obj: TDataItem) =>
                                            <div className={styles.container} key={obj._id}>
                                                <Card
                                                    style={{marginBottom: 0}}
                                                    theme={obj.theme}
                                                    url={`/posts/${obj._id}`}
                                                    title={obj.title}
                                                />
                                                <div className={styles.button}>
                                                    <button className={styles.delButton}
                                                            onClick={() => this.handleUpdate(obj._id)}
                                                            title={'Update!'}>
                                                        <i className="material-icons">update</i>
                                                    </button>
                                                </div>
                                                <div className={styles.button}>
                                                    <button className={styles.delButton}
                                                            onClick={() => this.handleDelete(obj._id)}
                                                            title={'Delete!'}>
                                                        <i className="material-icons-outlined">delete_forever</i>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                            : <h1>403 forbidden</h1>
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Private = connect(mapStateToProps)(_Private)

export default Private
