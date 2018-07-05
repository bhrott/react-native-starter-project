import { StackActions, NavigationActions } from 'react-navigation';
import appStore from '@state'

let _navigator = null

const storeListener = appStore.subscribe(() => {
    const navigationState = appStore.getState().navigation
    handleAppStateChanged(navigationState)
})

function handleAppStateChanged(state) {
    const currentNavigatorRoutes = _navigator.state.nav.routes
    const currentRouteName = currentNavigatorRoutes[currentNavigatorRoutes.length - 1].routeName

    const { routeName, type, params } = state.current

    if (currentRouteName === routeName) {
        console.log(`skip route handle`)
        return
    }

    if (type === 'push') {
        return pushToRoute(routeName, params)
    }

    if (type === 'reset') {
        return resetToRoute(routeName, params)
    }

    if (type === 'pop') {
        return popRoute();
    }
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
    }
}
