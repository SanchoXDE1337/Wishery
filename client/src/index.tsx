import React from 'react'
import ReactDOM from 'react-dom'
import App from './layout/App/App'
import {Provider} from 'react-redux'
import {Router} from "react-router-dom";
import historyService from './services/historyService'
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <Router history={historyService.history}>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));
