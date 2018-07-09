import { createStackNavigator } from 'react-navigation'
import { HomeScreen, LoadingScreen } from '@ui/screens'
import { ROUTE_NAMES } from '@state/navigation'

const StackNavigator = createStackNavigator(
    {
        [ROUTE_NAMES.LOADING]: {
            screen: LoadingScreen
        },
        [ROUTE_NAMES.HOME]: {
            screen: HomeScreen
        }
    },
    {
        initialRouteName: ROUTE_NAMES.LOADING
    }
)

export default StackNavigator
