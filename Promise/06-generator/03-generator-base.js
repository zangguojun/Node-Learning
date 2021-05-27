// `generator`函数，碰到`yield`就会暂停
function * read() {
  yield 1
  yield 2
  // return undefined
  return 3
}
// 生成器返回的是迭代器it，可以使用next()使用
let it = read()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());