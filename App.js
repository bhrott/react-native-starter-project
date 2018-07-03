/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import Theme from '@ui/theme'
import { RootRouter } from '@ui/router'
import { NavigationService } from '@ui/services'

Theme.configure()

export default class App extends Component {
    render() {
        return (
            <RootRouter
                ref={navigator => NavigationService.useNavigator(navigator)}
            />
        )
    }
}
