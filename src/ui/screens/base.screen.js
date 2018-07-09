import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import { SafeAreaView } from '@ui/components'

export default class BaseScreen extends React.Component {
    constructor(props) {
        super(props)

        this._didBlurEvent = null
        this._willBlurEvent = null
        this._didFocusEvent = null
        this._willFocusEvent = null

        this.screenDidBlur = this.screenDidBlur.bind(this)
        this.screenWillBlur = this.screenWillBlur.bind(this)
        this.screenDidFocus = this.screenDidFocus.bind(this)
        this.screenWillFocus = this.screenWillFocus.bind(this)
    }

    componentDidMount() {
        this._didBlurEvent = this.props.navigation.addListener('didBlur', this.screenDidBlur)
        this._willBlurEvent = this.props.navigation.addListener('willBlur', this.screenWillBlur)
        this._didFocusEvent = this.props.navigation.addListener('didFocus', this.screenDidFocus)
        this._willFocusEvent = this.props.navigation.addListener('willFocus', this.screenWillFocus)
    }

    componentWillMount() {
        this._didBlurEvent && this._didBlurEvent.remove()
        this._willBlurEvent && this._willBlurEvent.remove()
        this._didFocusEvent && this._didFocusEvent.remove()
        this._willFocusEvent && this._willFocusEvent.remove()
    }

    /**
     * Occurs when the screen will be presented to user
     * @param {*} event the lifecycle event form navigation
     */
    screenWillFocus(event) {
        // todo: override me if you need.
    }

    /**
     * Occurs when the screen is visible to user
     * @param {*} event the lifecycle event form navigation
     */
    screenDidFocus(event) {
        // todo: override me if you need.
    }

    /**
     * Occurs when the screen goes to background (other screen becomes active or app is putted in background)
     * @param {*} event the lifecycle event form navigation
     */
    screenDidBlur(event) {
        // todo: override me if you need.
    }

    /**
     * Occurs when the screen is going to background (other view will become active or app will be put in background)
     * @param {*} event the lifecycle event form navigation
     */
    screenWillBlur(event) {
        // todo: override me if you need.
    }

    /**
     * Create your page content here!
     */
    renderContent() {
        throw new Error('renderContent is not implemented')
    }

    /**
     * WARNING: override render only if really needed
     */
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
