const {currying} = require('./03-currying');
const {isType} = require('./01-isType');

let types = ['String', 'Number', 'Undefined', 'Null']
let util = []
types.forEach(typing => {
  util[`is${typing}`] = currying(isType)(typing)
})

if (require.main === module) {
  r = util.isString('hello')
  console.log(r);
  r = util.isNumber('hello')
  console.log(r);
}