import {createStore,combineReducers} from 'redux';
import UpdateRender from './action/updata';

const reducer=combineReducers({
    UpdateRender
});
const store=createStore(reducer);
export default store;