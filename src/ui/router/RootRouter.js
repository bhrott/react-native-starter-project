import { createStackNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen } from '@ui/screens'

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Login: {
            screen: LoginScreen
        }
    },
    {
        initialRouteName: 'Login'
    }
)
