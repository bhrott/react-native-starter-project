const fs = require('fs')

const folderName = process.argv[2]
const componentName = process.argv[3]

if (!folderName) {
    console.log('The folder name is required.')
    return process.exit(1)
}

if (!componentName) {
    console.log('The component name is required.')
    return process.exit(1)
}

const folderPath = `./src/ui/screens/${folderName}`
const componentFilePath = `${folderPath}/${componentName}.js`

const componentFileContent = `
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import BaseScreen from '../BaseScreen'

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class ${componentName} extends BaseScreen {
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
)(${componentName})
`

fs.mkdirSync(folderPath)
fs.writeFileSync(componentFilePath, componentFileContent)
