import { call, put, takeLatest } from 'redux-saga/effects'

import { finish, ACTION_FINISH } from './actions'
import { goToHome } from '../navigation'

function* _finish(action) {
    yield call(finish, action)
    yield put(goToHome())
}

function* saga() {
    yield takeLatest(ACTION_FINISH, _finish);
}

export default saga