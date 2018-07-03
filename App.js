import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Theme from '@ui/theme'
import { RootRouter } from '@ui/router'
import { NavigationService } from '@ui/services'
import appStore from '@state'

Theme.configure()

export default class App extends Component {
    render() {
        console.log('APP_STORE', appStore.getState())
        return (
            <Provider store={appStore}>
                <RootRouter
                    ref={navigator => NavigationService.useNavigator(navigator)}
                />
            </Provider>
        )
    }
}
