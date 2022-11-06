const selectFromInterval = (arr, first, last) => {
    if(arr && Array.isArray(arr) && !arr.some(isNaN) && !isNaN(first) && !isNaN(last)) {
        let newArr = []
        if(first < last) {
            newArr = arr.filter((el) => {
                return el >= first && el <= last
            }) 
        } else {
            newArr = arr.filter((el) => {
                return el <= first && el >= last
            })
        }
        return newArr
    } else {
        throw new Error()
    }
}