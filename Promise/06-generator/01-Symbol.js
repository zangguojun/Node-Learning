//Symbol中有很多“元编程”的方法，可以更改JS本身的功能
let obj = {
  get [Symbol.toStringTag]() {
    return 'xxx'
  }
}
console.log(obj.toString())