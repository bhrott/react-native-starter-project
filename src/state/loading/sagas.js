import { call, takeLatest } from 'redux-saga/effects'

import { finish, ACTION_FINISH } from './actions'
import { pushToHome } from '../navigation'

function* _finish(action) {
    yield call(finish, action)
    yield pushToHome()
}

function* saga() {
    yield takeLatest(ACTION_FINISH, _finish);
}

export default saga