import {combineReducers,createStore} from 'redux';
import List from './action/list';
const stores=combineReducers({
    List
});
export let store=createStore(stores);