Array.prototype.customFilter = function (func, obj)  {
    if (typeof(func) === 'function') {
        const filtered = []
        for (let i = 0; i < this.length; i++) {
            if (func.call(obj, this[i], i , this)) {       
                filtered.push(this[i])
            }
        }
        return filtered
    } else {
        throw new Error()
    }   
}