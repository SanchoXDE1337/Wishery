import React from 'react'
import styles from './styles.module.scss'
import 'rc-dialog/assets/index.css'
import LoginDialog from './LoginDialog'
import RegisterDialog from './RegisterDialog'
import LogoutButton from './LogoutButton'
import PrivateButton from './PrivateButton'
import historyService from '../../../services/historyService'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {login, logout} from '../../../store/actions'
import {IStore} from '../../../store/reducers'
import {Dropdown} from 'semantic-ui-react'
import axios from 'axios'
import Button from '../../../components/Button'

interface IState {
    token?: string
    isAuth: boolean
}

interface IProps {
    id?: string
    token?: string
    login?: (token: string, id: string) => void
    logout?: () => void
}

class HeaderWithoutRedux extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {token: props.token, isAuth: false}
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
        const {token} = nextProps
        if (!token) return {...prevState, isAuth: false}
        return token !== prevState.token ? {...prevState, token} : null
    }

    authenticate = async () => {
        const {token} = this.props
        const isAuth = (await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})).data
        if (isAuth !== this.state.isAuth) {
            if (isAuth) {
                this.setState({isAuth})
            } else {
                this.setState({isAuth: false})
            }
        }
    }

    async componentDidMount() {
        await this.authenticate()
    }

    async componentDidUpdate() {
        await this.authenticate()
    }

    handleClickToLogo = () => historyService.history!.push('/')

    render() {
        const {login, logout} = this.props
        return (
            <div className={styles.root}>
                <div onClick={this.handleClickToLogo} className={styles.title}>
                    WISHERY
                </div>
                <div className={styles.searchButton}>
                    <Button onClick={() => historyService.history!.push('/user/')}>Search users!</Button>
                </div>
                <div className={styles.buttonSet}>
                    <Dropdown text="Account">
                        <Dropdown.Menu direction={'left'}>
                            {this.state.isAuth ? (
                                <>
                                    <Dropdown.Item>
                                        <PrivateButton />
                                    </Dropdown.Item>
                                    <Dropdown.Item>{logout && <LogoutButton logout={logout} />}</Dropdown.Item>
                                </>
                            ) : (
                                <>
                                    <Dropdown.Item>{login && <LoginDialog login={login} />}</Dropdown.Item>
                                    <Dropdown.Item>{login && <RegisterDialog login={login} />}</Dropdown.Item>
                                </>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    login: (token: string, id: string) => dispatch(login(token, id)),
    logout: () => dispatch(logout()),
})

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderWithoutRedux)

export default Header
