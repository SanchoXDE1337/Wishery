import React from 'react';
import axios from "axios";
import historyService from "../../../services/historyService";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux";
import styles from './styles.module.scss'
import Button from "../../../components/Button";


interface IProps {
    id?: string,
    token?: string
}

type TDataItem = {
/*    author: string
    authorID: string
    description: string
    title: string
    _id: string
    theme: string
    date?: string*/
}

interface IState {
    isAuth: boolean
   /* data: TDataItem[]
    isDataEmpty: boolean*/
}


class _Settings extends React.Component<IProps, IState> {
    state = {
        isAuth: false
        /*data: [],
        isDataEmpty: false*/
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
        const {token} = nextProps;
        if (!token) return {...prevState, isAuth: false}
        return {...prevState, isAuth: true}
    }

    componentDidMount() {
        const {id, token} = this.props
        axios(`/api/private/${id}`, {headers: {'auth-token': token}})
            .then(res => {
                this.setState({isAuth: true})
            })
            .catch(e => {
                this.setState({isAuth: false})
            })
    }

    render() {
        if (!this.state.isAuth) return <h1>403 forbidden</h1>
        return (
            <div>
                <h1>Settings</h1>
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Settings = connect(mapStateToProps)(_Settings)

export default Settings
