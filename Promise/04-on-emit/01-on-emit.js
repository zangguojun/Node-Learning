const fs = require('fs');
let limit = 2
let obj = {}

let event = {
  _cbs : [],
  on(cb) {
    this._cbs.push(cb)
  },
  emit() {
    this._cbs.forEach(cb => cb())
  }
}

event.on(() => {
  console.log('获取成功！');
})

event.on(() => {
  Object.keys(obj).length === limit && console.log(obj);
})
fs.readFile('./name.txt','utf8',(error, data) => {
  obj.name = data
  event.emit()
})
fs.readFile('./age.txt','utf8',(error, data) => {
  obj.age = data
  event.emit()
})