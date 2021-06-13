/**
 * 类数组
 * 有索引，有长度，能遍历
 */
// 迭代器的作用：没有迭代器，数据不能被循环
let likeArray = { 0: 1, '1': '1', '2': true, 3: 1, length: 3 }
likeArray[Symbol.iterator] = function () {
  let index = 0
  return {
    next: () => {
      return { value: this[index], done: index++ === this.length }
    }
  }
}
console.log([...likeArray]);

// 不需要迭代器
console.log(Array.from(likeArray));