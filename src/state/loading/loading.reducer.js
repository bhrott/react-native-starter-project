
import { ACTION_IN_LOADING } from './loading.actions'

const initialState = {
    isLoading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_IN_LOADING:
            return { isLoading: action.payload }
    }

    return state
}

export default reducer
