import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers'
import createBrowserHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

const router=routerMiddleware(createBrowserHistory());

export default function configStore(){
    return createStore(
        rootReducer,
        applyMiddleware(
            thunk,
            router
        )
    )
    // return store;
}