import { ACTION_RESET, ACTION_PUSH, ACTION_POP } from './actions'

const initialState = {
    current: 'Loading',
    history: [
        {
            routeName: 'Loading',
            params: null,
            type: 'reset'
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_RESET:
            return resolveReset(state, action)
        case ACTION_PUSH:
            return resolvePush(state, action)
        case ACTION_POP:
            return resolvePop(state)
    }

    return state
}

function resolveReset(state, action) {
    let { routeName, params } = action.payload
    let newState = Object.assign({}, state)
    newState.current = {
        routeName,
        params,
        type: 'reset'
    }
    newState.history = [newState.current]

    return newState
}

function resolvePush(state, action) {
    let { routeName, params } = action.payload
    let newState = Object.assign({}, state)
    newState.current = {
        routeName,
        params,
        type: 'push'
    }
    newState.history.push(newState.current)

    return newState
}

function resolvePop(state) {
    if (state.history.length <= 1) {
        return state // no routes to pop
    }

    let newState = Object.assign({}, state)
    newState.history.pop()
    newState.current = state.history.last()
    newState.type = 'pop'

    return newState
}

export default reducer
