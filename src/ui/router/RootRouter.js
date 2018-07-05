import { createStackNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen, LoadingScreen } from '@ui/screens'

const StackNavigator = createStackNavigator(
    {
        Loading: {
            screen: LoadingScreen
        },
        Home: {
            screen: HomeScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Loading'
    }
)

export default StackNavigator
