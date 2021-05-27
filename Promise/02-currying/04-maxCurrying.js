const {currying} = require('./03-currying');

function max(a, b, c, d, e) {
  return Math.max(a, b, c, d, e)
}

if (require.main === module) {
  let newMax
  newMax = currying(max,[1,2])
  r = newMax(3)(4,5)
  console.log(r);
  newMax = currying(max)
  r = newMax(1)(2)(3)(4,5)
  console.log(r);
}