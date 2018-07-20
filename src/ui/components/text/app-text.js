import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const internotializations = {
    pt_br: () => require('./internotializations/pt-br.json')
}

let currentTranslation = internotializations.pt_br()

function getText(key) {
    return currentTranslation[key] || key
}

export default class APText extends React.PureComponent {
    render() {
        return <Text {...this.props}>{getText(this.props.textKey)}</Text>
    }
}

APText.propTypes = {
    textKey: PropTypes.string.isRequired
}
