import React from 'react';
import axios from "axios";
import Card from "../../../components/Card/Card";
import historyService from "../../../services/historyService";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux";
import styles from './styles.scss'
import Button from "../../../components/Button";


interface IProps {
    id?: string,
    token?: string
}

type TDataItem = {
    author: string
    description: string
    title: string
    _id: string
    theme: string
    date?: string
}

interface IState {
    data: TDataItem[]
    isAuth: boolean
    isDataEmpty: boolean
}


class _Private extends React.Component<IProps, IState> {
    state = {
        data: [],
        isAuth: false,
        isDataEmpty: false
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
        const {token} = nextProps;
        if (!token) return {...prevState, isAuth: false}
        return {...prevState, isAuth: true}
    }

    componentDidMount() {
        const {id, token} = this.props
        axios(`/private/${id}`, {headers: {'auth-token': token}})
            .then(res => {
                this.setState({isAuth: true})
            })
            .catch(e => {
                this.setState({isAuth: false})
            })
    }

    async componentDidUpdate(prevProps: Readonly<IProps>, prevState: IState) {
        const {id, token} = this.props
        const {data, isDataEmpty} = this.state
        if (isDataEmpty) return null
        if (data.length === 0) {
            try {
                const dataFromBD = (await axios(`/private/${id}`, {headers: {'auth-token': token}})).data
                if (dataFromBD.length !== 0) {
                    this.setState({data: dataFromBD})
                } else {
                    this.setState({isDataEmpty: true})
                }
            } catch (e) {
                if ((e.response.status === 400 || 401) && this.state.isAuth) {
                    this.setState({isAuth: false})
                }
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
            await axios.delete(`/posts/${id}`)
        }
    }

    render() {
        if (!this.state.isAuth) return <h1>403 forbidden</h1>
        return (
            <>
                {this.state.isDataEmpty
                    ? <div>
                        <h2>You have not any wishes :(</h2>
                        <div className={styles.addButton}>
                            <Button onClick={() => historyService.history!.push('/posts/add')}>
                                <span className={styles.plus}>+</span>Add new Wish!
                            </Button>
                        </div>
                    </div>
                    : this.state.data.length > 0
                        ? <h2>Here you can Update & Delete your Wishes</h2>
                        : null
                }
                {this.state.data.map((obj: TDataItem) =>
                    <div className={styles.container} key={obj._id}>
                        <Card
                            style={{marginBottom: 0}}
                            theme={obj.theme}
                            url={`/posts/${obj._id}`}
                            author={obj.author}
                            title={obj.title}
                        />
                        <div className={styles.button}>
                            <button className={styles.delButton} onClick={() => this.handleUpdate(obj._id)}
                                    title={'Update!'}>
                                <i className="material-icons">update</i>
                            </button>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.delButton} onClick={() => this.handleDelete(obj._id)}
                                    title={'Delete!'}>
                                <i className="material-icons-outlined">delete_forever</i>
                            </button>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Private = connect(mapStateToProps)(_Private)

export default Private
