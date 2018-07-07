import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import loginReducer from './login/login.reducer'
import loadingReducer from './loading/loading.reducer'

import loadingSagas from './loading/loading.sagas'

const appReducer = combineReducers({
    login: loginReducer,
    loading: loadingReducer
})

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(loadingSagas)

export default appStore
