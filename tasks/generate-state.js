const fs = require('fs')

const stateName = process.argv[2]

if (!stateName) {
    console.log('The state name is required.')
    return process.exit(1)
}

const stateFolder = `./src/state/${stateName}`

fs.mkdirSync(stateFolder)

fs.writeFileSync(`${stateFolder}/actions.js`)
fs.writeFileSync(`${stateFolder}/reducer.js`)
fs.writeFileSync(`${stateFolder}/index.js`)
