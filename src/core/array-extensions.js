Array.prototype.last = function () {
    if (this.length === 0) return

    return this[this.length - 1]
}

export default Array