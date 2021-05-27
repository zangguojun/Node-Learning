const fs = require('fs')
let obj = {}
let limit = 2
function output() {
  Object.keys(obj).length === limit && console.log(obj);
}

fs.readFile('./name.txt','utf8',(error, data) => {
  obj.name = data
  output()
})
fs.readFile('./age.txt','utf8',(error, data) => {
  obj.age = data
  output()
})

