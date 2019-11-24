import React from 'react'
import styles from './styles.scss'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import Private from './Private/Private'
import Home from './Home/Home'
import Post from './Post/Post'
import Footer from "./Footer";
import FourOFour from "./404";
import Form from './Form'
import Button from "../../../src/components/Button";
import historyService from "../../services/historyService";
import axios from "axios";
import {IStore} from "../../store/reducers";
import {connect} from "react-redux";

interface IProps {
    id?: string,
    token?: string
}

interface IState {
    token?: string
    isAuth: boolean
}

class _App extends React.Component<IProps, IState> {
    state = {
        isAuth: false
    }

    static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: IState) {
        const {token} = nextProps
        if (!token) return {...prevState, isAuth: false}
        return (token !== prevState.token) ? {...prevState, token, isAuth: true} : null
    }

    async componentDidMount() {
        const {token} = this.props
        const isAuth = (await axios(`/api/user/isAuth`, {headers: {'auth-token': token}})).data
        if (isAuth) return this.setState({isAuth})
    }

    render() {
        return (
            <div className={styles.root}>
                <Header/>
                <div className={styles.body}>
                    <div className={styles.content}>
                        <Switch>
                            <Route path="/private">
                                <Private/>
                            </Route>
                            <Route exact path="/posts/add"
                                   render={(props:any) => <Form {...props} author={this.props.id} token={this.props.token}/>}/>
                            <Route exact path="/posts/update/:id"
                                   render={(props:any) => <Form {...props} author={this.props.id} token={this.props.token}/>}/>
                            <Route exact path="/">
                                {this.state.isAuth
                                    ? <div className={styles.addButton}>
                                        <Button
                                            onClick={() => historyService.history!.push('/posts/add')}
                                        ><span className={styles.plus}>+</span>Add new Wish!</Button>
                                    </div>
                                    : null
                                }
                                <Home/>
                            </Route>
                            <Route exact path="/posts/:id" component={Post}/>
                            <Route path="*" component={FourOFour}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({accountStore: {id, token}}: IStore) => ({id, token})

const App = connect(mapStateToProps)(_App)

export default App