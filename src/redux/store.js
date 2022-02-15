
import user from './reducers/user'
import settings from './reducers/settings'
import settingShifts from './reducers/settingShifts';
import {combineReducers,createStore} from 'redux';
const reducer=combineReducers({user,settings,settingShifts})

const store=createStore(reducer)
window.store=store
export default store;