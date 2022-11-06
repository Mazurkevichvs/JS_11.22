const createIterable = (from, to) => {
    if( from !== undefined && to !== undefined && from < to && !isNaN(from) && !isNaN(to)) {
        const range = {
            from: from,
            to: to,
            [Symbol.iterator]() {
                this.current = this.from
                return this
            },
            next() {
                if(this.current <= this.to) {
                    return {done: false, value: this.current++}
                } else {
                    return { done: true }
                }
            }
        }
        return range
    } else {
        throw new Error()
    }
}