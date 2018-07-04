import { createStackNavigator } from 'react-navigation'
import { LoginScreen, HomeScreen } from '@ui/screens'

import appStore from '@state'

const StackNavigator = createStackNavigator(
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

const storeListener = appStore.subscribe(() => {
    const navigationState = appStore.getState().navigation
})

export default StackNavigator
