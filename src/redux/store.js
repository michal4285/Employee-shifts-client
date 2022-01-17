
import user from './reducers/user'
import settings from './reducers/settings'
import {combineReducers,createStore} from 'redux';
const reducer=combineReducers({user,settings})

const store=createStore(reducer)
window.store=store
export default store;