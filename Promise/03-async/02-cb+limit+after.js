const fs = require('fs')
let obj = {}
let limit = 2

function after (times, cb) {
  return () => {
    --times == 0 && cb()
  }
}

let output = after(limit, () => {
  console.log(obj);
})

fs.readFile('./name.txt','utf8',(error, data) => {
  obj.name = data
  output()
})
fs.readFile('./age.txt','utf8',(error, data) => {
  obj.age = data
  output()
})