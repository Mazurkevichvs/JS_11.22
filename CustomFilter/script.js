Object.defineProperty(Array.prototype, 'customFilter', {
    value: function (func, obj) {
        if (typeof(func) !== 'function') {
            throw new Error()
        } else if (obj && typeof(obj) !== 'object' || Array.isArray(obj)) {
            throw new Error()
        } else {
            const filtered = []
            for (let i = 0; i < this.length; i++) {
                if (func.call(obj, this[i], i , this)) {       
                    filtered.push(this[i])
                }
            }
            return filtered
        }  
    }
})   