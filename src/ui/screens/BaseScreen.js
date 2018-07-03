import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { SafeAreaView } from '@ui/components'

export default class BaseScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    /**
     * Create your page content here!
     */
    renderContent() {
        throw new Error('renderContent is not implemented')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderContent()}
            </SafeAreaView>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$colorPageBackground'
    }
})
