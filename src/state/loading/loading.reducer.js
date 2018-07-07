import { ACTION_FINISH } from './loading.actions'

const initialState = {
    finished: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_FINISH:
            return { finished: true }
    }

    return state
}

export default reducer
