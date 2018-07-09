import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import loadingReducer from './loading/loading.reducer'

import loadingSaga from './loading/loading.saga'

const appReducer = combineReducers({
    loading: loadingReducer
})

const sagaMiddleware = createSagaMiddleware()

const appStore = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
)

loadingSaga(sagaMiddleware)

export default appStore
