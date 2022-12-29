const buttons = document.querySelector('.buttons'),
      result = document.querySelector('.result')    
    
let firstNum = ''
let secondNum = ''
let operand = ''
let isEqualed = false

const OPERATORS = ['/', '*', '+', '-'];
const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.']

const clearAll = () => {
    firstNum = ''
    secondNum = ''
    operand = ''
    isEqualed = false
    result.textContent = '0'
    result.classList.remove('minimize')
}
const plusMinus = () => {
    if(firstNum !== '' && operand === '') {
        firstNum *= -1
        result.textContent = firstNum
    } else if( firstNum !== '' && operand !== '' && isEqualed) {
        firstNum *= -1
        result.textContent = firstNum
    } else {
        secondNum *= -1
        result.textContent = secondNum
    }
    firstNum = firstNum.toString()
    secondNum = secondNum.toString()
}
const deleteDigit = () => {
    if(firstNum !== '' && operand === '') {
        firstNum = firstNum.slice(0, -1)
        result.textContent = firstNum
    } else if(firstNum !== '' && operand !== '' && secondNum === '') {
        operand = operand.slice(0, -1)
        result.textContent = firstNum
    } else if(firstNum !== '' && operand !== '' && secondNum !== '' && !isEqualed) {
        secondNum = secondNum.slice(0, -1)
        result.textContent = secondNum
    } 
}
const equal = () => {
    if(operand === '' && firstNum !== '') {
        result.textContent = firstNum
        return
    } else if(operand === '' && firstNum === '') {
        result.textContent = '0'
        return
    } else if(operand !== '' && firstNum === '') {
        firstNum = '0'
    }
    if(secondNum === '') {
        secondNum = firstNum
    }
    firstNum = parseFloat(firstNum)
    secondNum = parseFloat(secondNum)
    switch(operand) {
        case '+':
            firstNum = firstNum + secondNum
            break
        case '-':
            firstNum = firstNum - secondNum
            break
        case '*':
            firstNum = firstNum * secondNum
            break
        case '/':
            if(secondNum === 0) {
                result.textContent = 'Error'
                setTimeout(clearAll, 1500)
                return
            }
            firstNum = firstNum / secondNum
            break  
    }
    firstNum = parseFloat(firstNum.toFixed(8)).toString()
    secondNum = ''
    operand = ''
    isEqualed = true
    result.textContent = firstNum
    if(firstNum.length > 15) {
        result.classList.add('minimize')
    } else {
        result.classList.remove('minimize')
    }
}
const addDigit = (button) => {  
    if(firstNum.length <= 15) {
        result.classList.remove('minimize')
    }
    if(operand === '' && secondNum === '' && !isEqualed) {
        if((firstNum === '' || firstNum ==='0') && button === '00') {
            firstNum = '0'
            result.textContent = firstNum
            return
        }
        if(firstNum.startsWith('0') && button !== '.' && !firstNum.includes('.')) {
            firstNum = ''
        }
        if(button === '.' && firstNum.includes('.') || firstNum.length === 15 ) {
            result.textContent = firstNum
            return
        }
        firstNum += button
        result.textContent = firstNum
    } else if(firstNum !== '' && operand === '' && isEqualed) {
        firstNum = ''
        firstNum += button
        result.textContent = firstNum
        isEqualed = false
    } else if(firstNum !== '' && operand !== '' && isEqualed) {
        secondNum = button
        isEqualed = false
        result.textContent = secondNum
    } else {
        if((secondNum === '' || secondNum ==='0') && button === '00') {
            secondNum = '0'
            result.textContent = secondNum
            return
        }
        if(secondNum.startsWith('0') && button !== '.' && !secondNum.includes('.')) {
            secondNum = ''
        }
        if(button === '.' && secondNum.includes('.') || secondNum.length === 15 ) {
            result.textContent = secondNum
            return
        }
        secondNum += button
        result.textContent = secondNum
    }
    return
}
const addOperand = (button) => {
    if(operand === '') {
        operand = button
        result.textContent = operand
        return
    } else if(firstNum !== '' && secondNum !== '') {
        equal()
        operand = button
        result.textContent = operand
        return
    } else {
        operand = button
        result.textContent = operand
    }
}
const handleClick = (e) => {
    try {    
        if(!e.target.classList.contains('btn')) {
            return
        }
        if(e.target.classList.contains('clear')) {
            clearAll()
            return
        }
        if(e.target.classList.contains('delete')) {
           deleteDigit()
            return
        }
        if(e.target.classList.contains('plus-minus')) {
            plusMinus()
            return
        }
        const button = e.target.textContent
        result.textContent = ''
        if(DIGITS.includes(button)) {
            addDigit(button)
            return
        }
        if(OPERATORS.includes(button)) {
            addOperand(button)
            return
        }
        if(button === '=') {
            equal()
            return
        }
    } catch (error) {
        result.textContent = 'Error'
        setTimeout(clearAll, 1500)
    } 
}
buttons.addEventListener('click', handleClick)