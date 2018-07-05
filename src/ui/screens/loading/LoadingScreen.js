
import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import { finish } from '@state/loading'

import BaseScreen from '../BaseScreen'

const mapStateToProps = state => {
    return state.loading
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class LoadingScreen extends BaseScreen {
    renderContent() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        this.props.dispatch(finish())
                    }}
                    title="Finish"
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
)(LoadingScreen)
