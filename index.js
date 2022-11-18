class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    #head = null
    #length = 0
    constructor(maxElements = 10) {
        if (maxElements && isNaN(maxElements) || maxElements < 0 || !isFinite(maxElements) || typeof(maxElements) !== 'number') {
            throw new Error('Invalid limit value')
        } else {
            this.maxElements = maxElements
        } 
    }
    push(elem) {
        if (this.#length === this.maxElements) {
            throw new Error('Limit exceeded')
        }
        let node = new Node(elem)
        if (this.#head === null) {
            this.#head = node
        } else {
            node.next = this.#head
            this.#head = node
        }
        this.#length++
    }
    pop() {
        let node = this.#head
        if (this.#head === null) {
            throw new Error('Empty stack')
        }
        this.#head = this.#head.next
        this.#length--
        return node.value
    }
    peek() {
        return this.#head.value
    }
    isEmpty() {
        return this.#head === null
    }
    toArray() {
        const arr = []
        if (!this.#head) {
            return arr
        }
        let node = this.#head
        arr.push(node.value)
        while (node.next) {
            arr.push(node.next.value)
            node = node.next
        }
        return arr
    }
    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Not iterable')
        }
        const newStack = new Stack(iterable.length)
        for (const item of iterable) {
            newStack.push(item)
        }
        return newStack
    }
}
class LinkedList {
    #head = null
    #tail = null
    append(elem) {
        let node = new Node(elem)
        if (this.#head === null) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail.next = node
            this.#tail = node
        }
    }
    prepend(elem) {
        let node = new Node(elem)
        if(this.#head === null) {
            this.#head = node
            this.#tail = node
        } else {
            node.next = this.#head
            this.#head = node
        } 
    }
    find(elem) {
        if (this.#head === null) {
            return null
        }
        let node = this.#head
        return this.#loop(node, elem)
    }
    toArray() {
        const arr = []
        return this.#fillArray(this.#head, arr)
    }
    static fromIterable(iterable) {
        if (typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Not iterable')
        }
        const newLinkedList = new LinkedList()
        for (const item of iterable) {
            newLinkedList.append(item)
        }
        return newLinkedList 
    }
    #loop(node, elem) {
        if (node.value === elem) {
            return node.value
        } 
        if (node.next === null) {
            return null
        }        
        return this.#loop(node.next, elem)
    }
    #fillArray(node, arr) {
        if (node === null) {
            return arr
        }   
        arr.push(node.value)     
        return this.#fillArray(node.next, arr)
    }
}
class Car {
    #brand = ''
    #model = ''
    #yearOfManufacturing = 1950
    #maxSpeed = 100
    #maxFuelVolume = 20
    #fuelConsumption = 1
    #damage = 1
    #currentFuelVolume = 0
    #isStarted = false
    #mileage = 0
    #health = 100

    get brand() {
        return this.#brand
    }
    set brand(value) {
        this.#validateString(value, 1, 50, 'brand name')
        this.#brand = value
    }
    get model() {
        return this.#model
    }
    set model(value) {
        this.#validateString(value, 1, 50, 'model name')
        this.#model = value
    }
    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }
    set yearOfManufacturing(value) {
        this.#validateNumber(value, 1950, new Date().getFullYear(), 'year of manufacturing')
        this.#yearOfManufacturing = value
    }
    get maxSpeed() {
        return this.#maxSpeed
    }
    set maxSpeed(value) {
        this.#validateNumber(value, 100, 330, 'max speed')
        this.#maxSpeed = value
    }
    get maxFuelVolume() {
        return this.#maxFuelVolume
    }
    set maxFuelVolume(value) {
        this.#validateNumber(value, 20, 100, 'max fuel volume')
        this.#maxFuelVolume = value
    }
    get fuelConsumption() {
        return this.#fuelConsumption
    }
    set fuelConsumption(value) {
        this.#validateNumber(value, 1, undefined, 'fuel consumption')
        this.#fuelConsumption = value
    }
    get damage() {
        return this.#damage
    }
    set damage(value) {
        this.#validateNumber(value, 1, 5, 'damage')
        this.#damage = value
    }
    get currentFuelVolume() {
        return this.#currentFuelVolume
    }
    get isStarted() {
        return this.#isStarted
    }
    get mileage() {
        return this.#mileage
    }
    get health() {
        return this.#health
    }
    start() {
        if (this.#isStarted === true) {
            throw new Error('Car has already started')
        }
        this.#isStarted = true
    }
    shutDownEngine() {
        if (this.#isStarted === false) {
            throw new Error(`Car hasn't started yet`)
        }
        this.#isStarted = false
    }
    fillUpGasTank(fuel) {
        this.#validateNumber(fuel, 1, undefined, 'fuel amount')
        if (this.#currentFuelVolume + fuel > this.maxFuelVolume) {
            throw new Error('Too much fuel')
        }
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first')
        }
        this.#currentFuelVolume += fuel
    }
    drive(speed, hours) {
        this.#validateNumber(speed, 1, undefined, 'speed')
        this.#validateNumber(hours, 1, undefined, 'duration')
        if (speed > this.#maxSpeed) {
            throw new Error(`Car can't go this fast`)
        }
        if (!this.#isStarted) {
            throw new Error('You have to start your car first')
        }
        const DISTANCE = speed * hours
        const FUELAMOUNT = DISTANCE / 100 * this.#fuelConsumption
        const HEALTHDAMAGE = DISTANCE / 100 * this.#damage
        if (FUELAMOUNT > this.currentFuelVolume) {
            throw new Error(`You don't have enough fuel`)
        }
        if (HEALTHDAMAGE > this.#health) {
            throw new Error(`Your car won't make it`)
        }
        this.#currentFuelVolume = parseFloat((this.#currentFuelVolume - FUELAMOUNT).toFixed(1))
        this.#health = parseFloat((this.#health - HEALTHDAMAGE).toFixed(1))
        this.#mileage = parseFloat((this.#mileage + DISTANCE).toFixed(1))
    }
    repair() {
        if (this.#isStarted) {
            throw new Error('You have to shut down your car first')
        }
        if (this.#currentFuelVolume !== this.#maxFuelVolume) {
            throw new Error('You have to fill up your gas tank first')
        }
        this.#health = 100
    }
    getFullAmount() {
        return parseFloat((this.#maxFuelVolume - this.#currentFuelVolume).toFixed(1))
    }
    #validateString(str, min, max, error) {
        if (typeof(str) !== 'string' || str.length < min || str.length > max || str.trim() === '') {
            throw new Error(`Invalid ${error}`)
        } 
    }
    #validateNumber(num, min, max, error) {
        if (typeof(num) !== 'number' || isNaN(num) || num < min || num > max || !isFinite(num)) {
            throw new Error(`Invalid ${error}`)
        }
    }
}