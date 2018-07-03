import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Text } from '@ui/components'

import BaseScreen from '../BaseScreen'

export default class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props)
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <Text textKey={'hello'} />
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
