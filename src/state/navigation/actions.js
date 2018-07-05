import EventEmitter from 'sm-event-emitter'

export const EVENT_REQUEST_ROUTE_CHANGE = 'NAVIGATION.EVENT_REQUEST_ROUTE_CHANGE'
export const ROUTE_CHANGE_TYPE = {
    RESET: 'NAVIGATION.ROUTE_CHANGE_TYPE_RESET',
    PUSH: 'NAVIGATION.ROUTE_CHANGE_TYPE_PUSH',
    POP: 'NAVIGATION.ROUTE_CHANGE_TYPE_POP'
}
export const ROUTE_NAMES = {
    LOADING: 'Loading',
    LOGIN: 'Login',
    HOME: 'Home'
}

export function resetToLogin() {
    requestRouteChange(ROUTE_CHANGE_TYPE.RESET, ROUTE_NAMES.LOGIN)
}

export function pushToHome() {
    requestRouteChange(ROUTE_CHANGE_TYPE.PUSH, ROUTE_NAMES.HOME)
}

export function goBack() {
    requestRouteChange(ROUTE_CHANGE_TYPE.POP)
}

function requestRouteChange(type, routeName, routeParams) {
    EventEmitter.emit(EVENT_REQUEST_ROUTE_CHANGE, {
        type,
        routeName,
        routeParams
    })
}