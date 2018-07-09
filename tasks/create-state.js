const fs = require('fs')

const stateName = process.argv[2]
const createSaga = process.argv[3] === 'saga'

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
import { ACTION_FOO } from './${stateName}.actions'

const initialState = {
    foo: 'baz'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        // todo: handle action
    }

    return state
}

export default reducer
`

const indexFileContent = `
/**
 * @providesModule @state/${stateName}
 */

import { foo } from './${stateName}.actions'

module.exports = {
    foo
}
`
const sagaFileContent = `
import { put, takeLatest } from 'redux-saga/effects'

import { ACTION_FOO, foo } from './${stateName}.actions'

function* _foo(action) {
    yield put(foo())
}

function* fooSaga() {
    yield takeLatest(ACTION_FOO, _foo);
}

export default sagaMiddleware => {
    sagaMiddleware.run(fooSaga)
}
`

if (createSaga) {
    fs.writeFileSync(`${stateFolder}/${stateName}.saga.js`, sagaFileContent)
}

fs.writeFileSync(`${stateFolder}/${stateName}.actions.js`, actionsFileContent)
fs.writeFileSync(`${stateFolder}/${stateName}.reducer.js`, reducerFileContent)
fs.writeFileSync(`${stateFolder}/index.js`, indexFileContent)

console.log(`State created in ${stateFolder}`)

process.exit(0)
