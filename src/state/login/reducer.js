import appStore from '@state'
import { push } from '@state/navigation'

import { ACTION_SIGNIN, ACTION_SIGNOUT } from './actions'

const initialState = {
    email: '',
    password: '',

    validation: {
        email: {
            isValid: true,
            message: 'login:invalid-email-field-message'
        },
        password: {
            isValid: true,
            message: 'login:invalid-password-field-message'
        }
    }
}

function resolveSignin(state, action) {}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_SIGNIN:
            return Object.assign({}, state, {
                message: action.type
            })
        case ACTION_SIGNOUT:
            return Object.assign({}, state, {
                message: action.type
            })
    }

    return state
}

export default loginReducer
