
import user from './reducers/user'
import {combineReducers,createStore} from 'redux';
const reducer=combineReducers({user})

const store=createStore(reducer)
window.store=store
export default store;