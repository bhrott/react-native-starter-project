import React, { Component } from 'react'
import { Provider } from 'react-redux'

import '@core'

import Theme from '@ui/theme'
import { RootRouter, NavigationManager } from '@ui/router'
import appStore from '@state'

Theme.configure()

export default class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <RootRouter
                    ref={navigator => NavigationManager.useNavigator(navigator)}
                />
            </Provider>
        )
    }
}
