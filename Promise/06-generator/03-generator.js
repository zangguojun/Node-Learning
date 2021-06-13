let likeArray = { 0: 1, '1': '1', '2': true, 3: 1, length: 3 }
likeArray[Symbol.iterator] = function * (){
  let index = 0
  while(index !== this.length) {
    yield this[index ++]
  }
}
console.log([...likeArray]); 