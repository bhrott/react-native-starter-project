function kebabToPascalCase(text) {
    const parts = text.split('-')

    return parts.map(word => {
        return capitalizeFirstLetter(word)
    }).join('')
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    kebabToPascalCase,
    capitalizeFirstLetter
}