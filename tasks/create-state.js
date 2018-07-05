const fs = require('fs')

const stateName = process.argv[2]

if (!stateName) {
    console.log('The state name is required.')
    return process.exit(1)
}

const stateFolder = `./src/state/${stateName}`

fs.mkdirSync(stateFolder)

const actionsFileContent = `
const prefix = 'ACTION'
const ACTION_FOO = \`\${prefix}.FOO\`

function foo(myParam) {
    return {
        type: ACTION_FOO,
        payload: {
			myParam
        }
    }
}

module.exports = {
    ACTION_FOO,
    foo
}
`

const reducerFileContent = `
import { ACTION_FOO } from './actions'

const initialState = {
    foo: 'baz'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_FOO:
            return Object.assign({}, state, {
                message: action.type
            })
    }

    return state
}

export default reducer
`

const indexFileContent = `
/**
 * @providesModule @state/${stateName}
 */

import { foo } from './actions'

module.exports = {
    foo
}
`

fs.writeFileSync(`${stateFolder}/actions.js`, actionsFileContent)
fs.writeFileSync(`${stateFolder}/reducer.js`, reducerFileContent)
fs.writeFileSync(`${stateFolder}/index.js`, indexFileContent)

console.log(`State created in ${stateFolder}`)

process.exit(0)
