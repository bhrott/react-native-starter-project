import { StackActions, NavigationActions } from 'react-navigation';
import EventEmitter from 'sm-event-emitter'
import { EVENT_REQUEST_ROUTE_CHANGE, ROUTE_CHANGE_TYPE } from '@state/navigation'

let _navigator = null
let _requestRouteChangeEventListener = null

function configureListeners() {
    _requestRouteChangeEventListener = EventEmitter.on(EVENT_REQUEST_ROUTE_CHANGE, payload => {
        switch (payload.type) {
            case ROUTE_CHANGE_TYPE.PUSH:
                return pushToRoute(payload.routeName, payload.routeParams)
            case ROUTE_CHANGE_TYPE.RESET:
                return resetToRoute(payload.routeName, payload.routeParams)
            case ROUTE_CHANGE_TYPE.POP:
                return popRoute()
        }
    })
}

function pushToRoute(routeName, params) {
    const pushAction = StackActions.push({
        routeName,
        params
    })

    _navigator.dispatch(pushAction)
}

function resetToRoute(routeName, params) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName, params })],
    });

    _navigator.dispatch(resetAction)
}

function popRoute() {
    const popAction = StackActions.pop({
        n: 1,
    });

    _navigator.dispatch(popAction)
}

export default class NavigationManager {
    static useNavigator(navigator) {
        _navigator = navigator
        configureListeners()
    }
}
