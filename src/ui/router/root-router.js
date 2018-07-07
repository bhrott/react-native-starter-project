import { createStackNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen, LoadingScreen } from '@ui/screens'
import { ROUTE_NAMES } from '@state/navigation'

const StackNavigator = createStackNavigator(
    {
        [ROUTE_NAMES.LOADING]: {
            screen: LoadingScreen
        },
        [ROUTE_NAMES.HOME]: {
            screen: HomeScreen
        },
        [ROUTE_NAMES.LOGIN]: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: ROUTE_NAMES.LOADING
    }
)

export default StackNavigator
