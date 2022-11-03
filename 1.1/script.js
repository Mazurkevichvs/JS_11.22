let firstNumber =  parseFloat(prompt('Give a first number:'))
let secondNumber = parseFloat(prompt('Give a second number:'))

if(isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('incorrect input!')
} else {
    console.log(`First number: ${firstNumber}, Second number: ${secondNumber}, Sum: ${firstNumber + secondNumber}, Product: ${firstNumber*secondNumber}, Power: ${firstNumber**secondNumber}`);
}