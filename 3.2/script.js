const createDebounceFunction = function (func, time) {
  if(typeof(func) === 'function' && !isNaN(time) && isFinite(time) && time >= 0) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        func(...args)
      }, time)
    }
  } else {
    throw new Error()
  }   
}