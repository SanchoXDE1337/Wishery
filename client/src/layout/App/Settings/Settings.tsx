import React from 'react';
import axios from "axios";
import {IStore} from "../../../store/reducers";
import {connect} from "react-redux"
import AddInfo from "./AddInfo";
import styles from './styles.module.scss'
import HashLoader from "react-spinners/HashLoader";
import UserCard from "../User/UserCard";
import ChangePassword from "./ChangePassword";


interface IProps {
    id?: string,
    token?: string
}

type TInfo = {
    age?: number,
    imgUrl?: string
    contacts?: {
        vk?: string,
        instagram?: string,
        telegram?: string
    }
}

interface IState {
    isAuth: boolean
    loading: boolean
    username: string
    date: string
    info: TInfo
}


class _Settings extends React.Component<IProps, IState> {
    state = {
        isAuth: false,
        loading: true,
        date: '',
        username: '',
        info: {
            age: undefined,
            imgUrl: '',
            contacts: {
                vk: '',
                instagram: '',
                telegram: ''
            }
        }
    }

    async componentDidMount() {
        const {token, id} = this.props
        try {
            await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})
            this.setState({isAuth: true})
            const data = (await axios(`/api/user/${id}`)).data
            const {vk, instagram, telegram} = data.info.contacts
            this.setState({
                username: data.username,
                date: data.date,
                info: {age: data.info.age, imgUrl: data.info.imgUrl, contacts: {vk, instagram, telegram}}
            })
        } catch (e) {
            this.setState({isAuth: false})
        }
        window.setTimeout(() => this.setState({loading: false}), 900)
    }

    render() {
        const {loading, isAuth, username, date, info: {age, imgUrl, contacts: {vk, instagram, telegram,}}} = this.state
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
                    : isAuth
                        ? <div className={styles.content}>
                            <UserCard username={username} age={age} vk={vk} instagram={instagram} telegram={telegram}
                                      date={date} imgUrl={imgUrl}/>
                            <h3>Settings:</h3>
                            <AddInfo id={this.props.id} token={this.props.token}/>
                            <ChangePassword id={this.props.id} token={this.props.token}/>
                        </div>
                        : <h1>403 forbidden</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Settings = connect(mapStateToProps)(_Settings)

export default Settings
