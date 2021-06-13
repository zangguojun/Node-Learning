function currying(fn, args1 = []) {
  const len = fn.length
  return (...args2) => {
    const args = [...args1, ...args2]
    if (args.length < len) {
      return currying(fn, args)
    } else {
      return fn(...args)
    }
  }
}
module.exports = {
  currying
}