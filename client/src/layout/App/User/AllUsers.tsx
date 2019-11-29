import React from 'react'
import axios from 'axios'
import HashLoader from 'react-spinners/HashLoader'
import styles from './styles.module.scss'
import UserCard from './UserCard'
import InputWithIcon from '../../../components/SearchInput'

type TDataItem = {
    username: string
    info: {
        contacts: {
            telegram?: string
            vk?: string
            instagram?: string
        }
        imgUrl?: string
        age?: number
    }
    date: string
}

interface IState {
    data: TDataItem[] | null
    loading: boolean
    inputValue: string
}

class AllUsers extends React.Component<IState> {
    state = {
        data: [],
        loading: true,
        inputValue: '',
    }

    async componentDidMount() {
        const data = (await axios(`/api/user/`)).data
        window.setTimeout(
            () =>
                this.setState({
                    data,
                    loading: false,
                }),
            1000,
        )
    }

    handleInputChange = (e: any) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
    }

    render() {
        const {loading, inputValue, data} = this.state
        const filteredData: TDataItem[] = data.filter((user: TDataItem) => {
            if (inputValue !== '') {
                return user.username.toLowerCase().includes(inputValue.toLowerCase())
            } else {
                return user
            }
        })
        return (
            <div>
                {loading ? (
                    <div className={styles.loader}>
                        <HashLoader sizeUnit={'px'} size={150} color={'#36d7b7'} loading={this.state.loading} />
                    </div>
                ) : (
                    <div>
                        <div className={styles.search}>
                            <InputWithIcon onChange={(event: any) => this.handleInputChange(event)} fluid />
                        </div>
                        <div className={styles.gridContent}>
                            {filteredData.map((object: TDataItem) => {
                                const {
                                    username,
                                    date,
                                    info: {
                                        imgUrl,
                                        age,
                                        contacts: {vk, instagram, telegram},
                                    },
                                } = object
                                return (
                                    <div className={styles.gridItem} key={username}>
                                        <UserCard
                                            username={username}
                                            age={age}
                                            vk={vk}
                                            instagram={instagram}
                                            telegram={telegram}
                                            date={date}
                                            imgUrl={imgUrl}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default AllUsers
