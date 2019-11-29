import React from 'react'
import axios from 'axios'
import Card from '../../../components/Card/Card'
import {Form as UIForm} from 'semantic-ui-react'
import InputWithIcon from '../../../components/SearchInput'
import styles from './styles.module.scss'
import Button from '../../../components/Button'
import historyService from '../../../services/historyService'
import {connect} from 'react-redux'
import {IStore} from '../../../store/reducers'
import HashLoader from 'react-spinners/HashLoader'

interface IProps {
    token?: string
}

type TDataItem = {
    _id: string
    author: string
    authorID: string
    description?: string
    title: string
    theme: string
    date?: string
}

interface IState {
    data: TDataItem[] | null
    selectValue: string
    inputValue: string
    isAuth: boolean
    loading: boolean
}

class HomeWithoutRedux extends React.Component<IProps, IState> {
    state = {
        isAuth: false,
        data: [],
        selectValue: '',
        inputValue: '',
        loading: true,
    }

    async componentDidMount() {
        const data = (await axios(`/api/`)).data
        data.reverse()
        window.setTimeout(() => this.setState({data, loading: false}), 900)
    }

    async componentDidUpdate() {
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

    handleSelectChange = (e: any) => {
        console.log(e.target.value)
        this.setState({selectValue: e.target.value})
    }
    handleInputChange = (e: any) => {
        console.log(e.target.value)
        this.setState({inputValue: e.target.value})
    }

    render() {
        const {data, selectValue, inputValue, loading} = this.state
        const filteredByInput: TDataItem[] = data.filter((item: TDataItem) => {
            if (inputValue !== '') {
                return item.title.toLowerCase().includes(inputValue.toLowerCase())
            } else {
                return item
            }
        })
        const filteredData: TDataItem[] = filteredByInput.filter((item: TDataItem) =>
            selectValue ? item.theme === selectValue : item,
        )
        return (
            <>
                {loading ? (
                    <div className={styles.loader}>
                        <HashLoader sizeUnit={'px'} size={150} color={'#36d7b7'} loading={loading} />
                    </div>
                ) : (
                    <div className={styles.content}>
                        {this.state.isAuth ? (
                            <div className={styles.addButton}>
                                <Button onClick={() => historyService.history!.push('/posts/add')}>
                                    <span className={styles.plus}>+</span>Add new Wish!
                                </Button>
                            </div>
                        ) : null}
                        <div className={styles.search}>
                            <InputWithIcon onChange={(event: any) => this.handleInputChange(event)} />
                        </div>
                        <UIForm className={styles.search}>
                            <label>Theme of wishes: </label>
                            <select onChange={(event: any) => this.handleSelectChange(event)}>
                                <option value="">All</option>
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
                        </UIForm>
                        {filteredData.map((obj: TDataItem) => (
                            <Card
                                author={obj.author}
                                authorID={obj.authorID}
                                url={`/posts/${obj._id}`}
                                theme={obj.theme}
                                title={obj.title}
                                key={obj.author + obj.description + obj.title}
                            />
                        ))}
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const Home = connect(mapStateToProps)(HomeWithoutRedux)

export default Home
