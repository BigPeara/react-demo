import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from './App'
import configStore from './store/configStore'

const store=configStore();

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/app' component={App}/>
                <Redirect to='/app'/>
            </Switch>
        </HashRouter>
    </Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
