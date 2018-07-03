import React from 'react'
import { View, Button } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Text } from '@ui/components'
import { NavigationService } from '@ui/services'

import BaseScreen from '../BaseScreen'

export default class LoginScreen extends BaseScreen {
    constructor(props) {
        super(props)
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <Text textKey={'hello'} />
                <Button
                    onPress={() => {
                        NavigationService.pushToHome()
                    }}
                    title="Go To Home"
                    color={EStyleSheet.value('$colorPrimary')}
                />
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
