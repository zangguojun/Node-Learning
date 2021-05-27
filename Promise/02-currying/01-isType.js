/**
 * 类型判断
 * 1、typeof 不能区分对象类型，能识别出function typeof [] typeof {}
 * 2、constructor 可以判断这个实例时通过谁来构造出来的
 * 3、instanceof 区分实例 根据__proto__
 * 4、Object.prototype.toString.call([]) 区分具体类型 但不区分实例
 */
function isType(typing, content) {
  return Object.prototype.toString.call(content) === `[object ${typing}]`
}

if (require.main === module) { 
  let r
  r = isType('String', 'hello')
  console.log(r);
  r = isType('Number', 'hello')
  console.log(r);
}

module.exports = {
  isType
}