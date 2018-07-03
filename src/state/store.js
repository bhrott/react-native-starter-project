import { combineReducers, createStore } from 'redux'

import loginReducer from './login/reducer'

const appReducer = combineReducers({
    login: loginReducer
})

const appStore = createStore(appReducer)

export default appStore
