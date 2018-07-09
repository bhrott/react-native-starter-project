
import { put, takeLatest, call } from 'redux-saga/effects'

import { ACTION_FINISH, finish, setInLoading } from './loading.actions'

import { pushToHome } from '../navigation'

function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

function* _finish(action) {
    console.log('_finish')
    yield put(setInLoading(true))
    yield call(finish, action.payload)
    yield wait(2000)
    yield put(setInLoading(false))

    pushToHome()
}

function* finishSaga() {
    yield takeLatest(ACTION_FINISH, _finish);
}

export default sagaMiddleware => {
    sagaMiddleware.run(finishSaga)
}
