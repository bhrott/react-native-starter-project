const ACTION_SIGNIN = 'LOGIN.SIGNIN'
const ACTION_SIGNOUT = 'LOGIN.SIGNOUT'

function signIn(email, password) {
    return {
        type: ACTION_SIGNIN,
        data: {
            email,
            password
        }
    }
}

function signOut() {
    return {
        type: ACTION_SIGNOUT
    }
}

module.exports = {
    ACTION_SIGNIN,
    ACTION_SIGNOUT,
    signIn,
    signOut
}
