const {currying} = require('./03-currying');
const {isType} = require('./01-isType');

if (require.main === module) {
  let isString = currying(isType,['String'])
  r = isString('hello')
  console.log(r);
  let NewIsType = currying(isType)
  r = NewIsType('String')('hello')
  console.log(r);
}