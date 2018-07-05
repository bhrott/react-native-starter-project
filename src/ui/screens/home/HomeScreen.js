
import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import { pop } from '@state/navigation'

import BaseScreen from '../BaseScreen'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class HomeScreen extends BaseScreen {
    renderContent() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        this.props.dispatch(pop())
                    }}
                    title="Go Back"
                    color="#841584"
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
