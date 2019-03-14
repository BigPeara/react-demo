import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {initData} from './app/reducer';

const rootReducer=combineReducers({
    routerReducer,
    initData
})

export default rootReducer;