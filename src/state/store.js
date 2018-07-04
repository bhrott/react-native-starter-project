import { combineReducers, createStore } from 'redux'

import loginReducer from './login/reducer'
import navigationReducer from './navigation/reducer'

const appReducer = combineReducers({
    login: loginReducer,
    navigation: navigationReducer
})

const appStore = createStore(appReducer)

export default appStore
