const prefix = 'NAVIGATION'
const ACTION_PUSH = `${prefix}.PUSH`
const ACTION_RESET = `${prefix}.RESET`
const ACTION_POP = `${prefix}.POP`

function push(routeParams) {
    return {
        type: ACTION_PUSH,
        data: routeParams
    }
}

function reset(routeParams) {
    return {
        type: ACTION_RESET,
        data: routeParams
    }
}

function pop() {
    return {
        type: ACTION_POP
    }
}

module.exports = {
    ACTION_PUSH,
    ACTION_RESET,
    ACTION_POP,

    push,
    reset,
    pop
}
