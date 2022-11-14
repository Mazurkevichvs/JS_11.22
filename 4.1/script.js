const concatStrings = (str, sep) => {
    let result = ''
    const passArgs = (nextArg) => {
        if (nextArg !== undefined) {
            return passArgs
        }
        return result
    }
    if (typeof(str) === undefined || typeof(str) !== 'string') {
        return passArgs
    }
    result = str   
    const addStr = (nextStr) => {    
        if (nextStr !== undefined && typeof(nextStr) === 'string') {
        if (sep !== undefined && typeof(sep) === 'string') {
            result += sep + nextStr
        } else {
            result += nextStr
        }
        return addStr
        } else if(nextStr !== undefined && typeof(nextStr) !== 'string') {
        return passArgs
        }
        return result
    }  
    return addStr
}  