
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Text } from '@ui/components'

import { finish } from '@state/loading'

import BaseScreen from '../base.screen'

const mapStateToProps = state => {
    return state.loading
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class LoadingScreen extends BaseScreen {
    _load() {
        this.props.dispatch(finish())
    }

    screenDidFocus() {
        this._load()
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <Text textKey={'loading:title'} />
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
