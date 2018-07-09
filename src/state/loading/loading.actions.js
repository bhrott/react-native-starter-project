
const prefix = 'LOADING'
const ACTION_FINISH = `${prefix}.FINISH`
const ACTION_IN_LOADING = `${prefix}.IN_LOADING`

function finish() {
    return {
        type: ACTION_FINISH
    }
}

function setInLoading(inLoading) {
    return {
        type: ACTION_IN_LOADING,
        payload: inLoading
    }
}

module.exports = {
    ACTION_FINISH,
    ACTION_IN_LOADING,
    finish,
    setInLoading
}
