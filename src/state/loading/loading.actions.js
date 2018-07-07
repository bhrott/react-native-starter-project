const prefix = 'LOADING'
const ACTION_FINISH = `${prefix}.ACTION_FINISH`

function finish() {
    return {
        type: ACTION_FINISH
    }
}

module.exports = {
    ACTION_FINISH,
    finish
}
