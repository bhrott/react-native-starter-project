const fs = require('fs')
const { kebabToPascalCase } = require('./utils')

const componentName = process.argv[2]
const connectToRedux = process.argv[3] === 'redux'

if (!componentName) {
    console.log('The component name is required.')
    process.exit(1)
}

const folderPath = `./src/ui/components/${componentName}`
const filePath = `${folderPath}/${componentName}.js`

const className = kebabToPascalCase(componentName)

let componentFileContent = ''

if (connectToRedux) {
    componentFileContent = `
import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

class ${className} extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(${className})
`
}
else {
    componentFileContent = `
import React from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

export default class ${className} extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1
    }
})
`
}

fs.mkdirSync(folderPath)
fs.writeFileSync(filePath, componentFileContent)

console.log(`Component created in ${filePath}`)