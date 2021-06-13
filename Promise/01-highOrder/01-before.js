Function.prototype.before = function (callback) {
  return (...args) => {
    callback()
    this(...args)
  }
}
if (require.main === module) { 
  let say = (name1, name2) => {console.log(`你好${name1}，${name2}`)}
  let newSay = say.before(() => {
    console.log('说话前');
  })
  newSay('Jack','Mara')
}
