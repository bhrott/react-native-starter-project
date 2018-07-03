import { StackActions } from 'react-navigation'

let _navigator = null

function push(routeName, params) {
    const pushAction = StackActions.push({
        routeName,
        params
    })

    _navigator.dispatch(pushAction)
}

export default class NavigationService {
    static useNavigator(navigator) {
        _navigator = navigator
    }

    static pushToHome() {
        push('Home')
    }
}
