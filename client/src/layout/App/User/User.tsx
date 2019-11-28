import React from 'react';
import axios from "axios";
import HashLoader from 'react-spinners/HashLoader'
import styles from './styles.module.scss'
import UserCard from "./UserCard";

interface IProps {
    match?: any
}

type TDataItem = {
    vk?: string
    instagram?: string
    telegram?: string
    age?: number
    username: string,
    date: string
    imgUrl?:string
}

interface IState {
    data: TDataItem | null,
    loading: boolean
}


class User extends React.Component<IProps, IState> {
    state = {
        data: {
            username: '',
            vk: '',
            instagram: '',
            telegram: '',
            age: undefined,
            imgUrl: '',
            date: ''
        },
        loading: true
    }

    async componentDidMount() {
        const data = (await axios(`/api/user/${this.props.match.params.id}`)).data
        const {vk, instagram, telegram} = data.info.contacts
        window.setTimeout(() => this.setState({
            data: {
                vk,
                instagram,
                telegram,
                age: data.info.age,
                username: data.username,
                date: data.date,
                imgUrl: data.info.imgUrl
            }, loading: false
        }), 1000)
    }

    render() {
        const {data: {vk, instagram, telegram, age, username, date, imgUrl}, loading} = this.state
        return (
            <div>
                {loading
                    ? <div className={styles.loader}>
                        <HashLoader
                            sizeUnit={"px"}
                            size={150}
                            color={'#36d7b7'}
                            loading={this.state.loading}
                        />
                    </div>
                    : <div className={styles.content}>
                        <UserCard username={username} age={age} vk={vk} instagram={instagram} telegram={telegram}
                                  date={date} imgUrl={imgUrl}/>
                    </div>}
            </div>
        )
    }
}

export default User