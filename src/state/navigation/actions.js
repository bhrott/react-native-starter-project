const prefix = 'NAVIGATION'
export const ACTION_PUSH = `${prefix}.PUSH`
export const ACTION_RESET = `${prefix}.RESET`
export const ACTION_POP = `${prefix}.POP`

export function push(routeParams) {
    return {
        type: ACTION_PUSH,
        payload: routeParams
    }
}

export function reset(routeParams) {
    return {
        type: ACTION_RESET,
        payload: routeParams
    }
}

export function pop() {
    return {
        type: ACTION_POP,
        payload: {}
    }
}

export function resetToLogin() {
    return reset({
        routeName: 'Login'
    })
}

export function goToHome() {
    return push({
        routeName: 'Home'
    })
}

