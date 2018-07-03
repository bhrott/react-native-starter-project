import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

const translations = {
    pt_br: () => require('./translations/pt-br.json')
}

let currentTranslation = translations.pt_br()

function getText(key) {
    return currentTranslation[key] || key
}

export default class APText extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Text {...this.props}>{getText(this.props.textKey)}</Text>
    }
}

APText.propTypes = {
    textKey: PropTypes.string.isRequired
}
