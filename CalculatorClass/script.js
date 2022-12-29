class Calculator {
    constructor(num1, num2) {
        if (!num1 || !num2 || isNaN(num1) || isNaN(num2) || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            throw new Error()
        }
        this.num1 = num1
        this.num2 = num2
        this.setX = this.setX.bind(this)
        this.setY = this.setY.bind(this)
        this.getSum = this.getSum.bind(this)
        this.getMul = this.getMul.bind(this)
        this.getSub = this.getSub.bind(this)
        this.getDiv = this.getDiv.bind(this)
    }
    setX(num) {
        if (!num || isNaN(num) || typeof(num) !== 'number' || !isFinite(num)) {
            throw new Error()
        }
        this.num1 = num
    }
    setY(num) {
        if (!num || isNaN(num) || typeof(num) !== 'number' || !isFinite(num)) {
            throw new Error()   
        }
        this.num2 = num
    }
    getSum() {
        return this.num1 + this.num2
    }
    getMul() {
        return this.num1 * this.num2
    }
    getSub() {
        return this.num1 - this.num2
    }
    getDiv() {
        if (this.num2 === 0) {
            throw new Error
        }
        return this.num1 / this.num2
    }   
}