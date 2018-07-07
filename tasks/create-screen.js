const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]

if (!componentName) {
    console.log('The component name is required.')
    return process.exit(1)
}

const folderPath = `./src/ui/screens/${componentName}`
const componentFilePath = `${folderPath}/${componentName}.screen.js`

const className = `${kebabToPascalCase(componentName)}Screen`

const componentFileContent = `
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import BaseScreen from '../base.screen'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class ${className} extends BaseScreen {
    renderContent() {
        return (
            <View style={styles.container}>
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
)(${className})
`

fs.mkdirSync(folderPath)
fs.writeFileSync(componentFilePath, componentFileContent)

console.log(`Screen created in ${componentFilePath}`)