import { ACTION_SIGNIN, ACTION_SIGNOUT } from './actions'

const initialState = {
    email: '',
    password: '',

    validation: {
        email: {
            isValid: true,
            message: 'login:invalid-email-field'
        },
        password: {
            isValid: true,
            message: 'login:invalid-password-field'
        }
    }
}

const testState = {
    message: ''
}

function loginReducer(state = testState, action) {
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
