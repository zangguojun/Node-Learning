let util = []
let types = ['String', 'Number', 'Undefined', 'Null']
types.forEach(typing => {
  util[`is${typing}`] = function(content) {
    return Object.prototype.toString.call(content) === `[object ${typing}]`
  }
})
if (require.main === module) {
  let r
  r = util.isString('hello')
  console.log(r);
  r = util.isNumber('hello')
  console.log(r);
}