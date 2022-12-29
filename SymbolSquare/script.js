let symbol = prompt('Give a symbol(less than 3 chars):')
let number = parseInt(prompt('Give a second number(>0 and <10):'))

let result = ''
let count = 0

if(isNaN(number) || symbol === '' || symbol === null || symbol > 3 || number < 0 || number > 10) {
    console.log("Incorrect input!")
} else {
    for(let i=0;i<number*number; i++) {
        result += `${symbol} `
        count++
        if(count === number) {
            result += '\n'
            count = 0
        }
    }
    console.log(result)
}
