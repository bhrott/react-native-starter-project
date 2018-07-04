import React from 'react'
import { View, Button } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { connect } from 'react-redux'

import { Text } from '@ui/components'
import { signIn } from '@state/login'

import BaseScreen from '../BaseScreen'

const mapStateToProps = state => {
    return state.login
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password) => {
            dispatch(signIn(email, password))
        }
    }
}

class LoginScreen extends BaseScreen {
    renderContent() {
        return (
            <View style={styles.container}>
                <Text textKey={this.props.email} />
                <Button
                    onPress={() => {
                        this.props.signIn('ben@cwi.com', '123')
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
