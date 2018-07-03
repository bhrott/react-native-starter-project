import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform } from 'react-native'

const Container = Platform.OS === 'android' ? View : SafeAreaView

export default class SafeAreaViewComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container style={styles.container}>
                {this.props.children}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
