import React from 'react'
import styles from './Header/styles.module.scss'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import Private from './Private/Private'
import Home from './Home/Home'
import Post from './Post/Post'
import User from './User/User'
import Settings from './Settings/Settings'
import Footer from './Footer'
import FourOFour from './404'
import WishForm from './Form'
import AllUsers from './User/AllUsers'

class App extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <Header />
                <div className={styles.body}>
                    <div className={styles.content}>
                        <Switch>
                            <Route exact path="/private" component={Private} />
                            <Route exact path="/private/settings" component={Settings} />
                            <Route exact path="/posts/add" component={WishForm} />
                            <Route exact path="/posts/update/:id" component={WishForm} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/posts/:id" component={Post} />
                            <Route exact path="/user/:id" component={User} />
                            <Route exact path="/user/" component={AllUsers} />
                            <Route path="*" component={FourOFour} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App
