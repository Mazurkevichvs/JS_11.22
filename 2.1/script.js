const makeDeepCopy = (obj) => {
    if(typeof(obj) === 'object' && !Array.isArray(obj) && obj !== null) {
        const copiedObj = {}
        for (const key in obj) {
            if(obj.hasOwnProperty(key)) {
                copiedObj[key] = obj[key]
            }
        }
        return copiedObj
    } else {
        throw new Error()
    }
}