## 高阶函数

> 1、参数中有函数
>
> 2、返回一个函数

### 一、`before`函数

```js
Function.prototype.before = function (callback) {
  return (...args) => {
    callback()
    this(...args)
  }
}
let say = (name1, name2) => {console.log(`你好${name1}，${name2}`)}
let newSay = say.before(() => {
  console.log('说话前');
})
newSay('Jack','Mara')
```

### 二、函数柯里化

> #### 类型判断
>
> + 1、`typeof` 不能区分对象类型，能识别出`function` `typeof []` `typeof {}`
>
> + 2、`constructor` 可以判断这个实例时通过谁来构造出来的
>
> + 3、`instanceof` 区分实例 根据`__proto__`
>
> + 4、`Object.prototype.toString.call([])` 区分具体类型 但不区分实例

#### 1、基础版

```js
function currying(content, typing) {
  return Object.prototype.toString.call(content) === `[object ${typing}]`
}
let r
r = currying('hello','String')
console.log(r);
r = currying('hello','Number')
console.log(r);
```

#### 2、进阶版

```js
let util = []
let types = ['String', 'Number', 'Undefined', 'Null']
types.forEach(typing => {
  util[`is${typing}`] = function(content) {
    return Object.prototype.toString.call(content) === `[object ${typing}]`
  }
})
let r
r = util.isString('hello')
console.log(r);
r = util.isNumber('hello')
console.log(r);
```

> 偏函数：表示参数也可以分开传递，但是参数个数不一定是一个

#### 3、最终版

```js
function currying(fn, args1 = []) {
  const len = fn.length
  return (...args2) => {
    const args = [...args1, ...args2]
    if (args.length < len) {
      return currying(fn, args)
    } else {
      return fn(...args)
    }
  }
}
```



###### `max`的柯里化

```js
function max(a, b, c, d, e) {
  return Math.max(a, b, c, d, e)
}
function currying(fn, args1 = []) {
  const len = fn.length
  return (...args2) => {
    const args = [...args1, ...args2]
    if (args.length < len) {
      return currying(fn, args)
    } else {
      return fn(...args)
    }
  }
}
let newMax
newMax = currying(max,[1,2])
r = newMax(3)(4,5)
console.log(r);
newMax = currying(max)
r = newMax(1)(2)(3)(4,5)
console.log(r);
```

###### `isType`的柯里化

```js
function isType(typing, content) {
  return Object.prototype.toString.call(content) === `[object ${typing}]`
}
function currying(fn, args1 = []) {
  const len = fn.length
  return (...args2) => {
    const args = [...args1, ...args2]
    if (args.length < len) {
      return currying(fn, args)
    } else {
      return fn(...args)
    }
  }
}
let isString = currying(isType,['String'])
r = isString('hello')
console.log(r);
let NewIsType = currying(isType)
r = NewIsType('String')('hello')
console.log(r);

let types = ['String', 'Number', 'Undefined', 'Null']
let util2 = []
types.forEach(typing => {
  util2[`is${typing}`] = currying(isType)(typing)
})
r = util2.isString('hello')
console.log(r);
r = util2.isNumber('hello')
console.log(r);
```

### 三、异步并发

#### 1、回调函数 + 计数器

```js
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
```

#### 2、回调函数 + 计数器 + `after`

```js
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
```

### 四、发布订阅模式

```js
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
```

### 五、观察者模式

> 基于`发布订阅模式`，而且观察者和被观察者直接有关联

```js
class Subject {
  constructor(name, state) {
    this.name = name
    this.state = state
    this.observer = []
  }
  attach = (o) => {
    this.observer.push(o)
  }
  setState = (newState) => {
    this.state = newState
    this.observer.forEach(o => o.update(this))
  }
}
class Observer {
  constructor(name) {
    this.name = name
  }
  update = (o) => {
    console.log(`${this.name} know ${o.name} ${o.state}`);
  }
}
let baby = new Subject('baby', 'happy')
let fa = new Observer('fa')
let ma = new Observer('ma')
baby.attach(fa)
baby.attach(ma)
baby.setState('unhappy')
baby.setState('happy')
```

### 六、`Promise`

### 七、迭代器

> + *Symbol中有很多“元编程”的方法，可以更改JS本身的功能*
>
>   + ```js
>     let obj = {
>       get [Symbol.toStringTag]() {
>         return 'xxx'
>       }
>     }
>     console.log(obj.toString())
>     ```
>
> + 类数组转换成数组
>
>   + `console.log(Array.from(likeArray))`
>     + 不需要迭代器
>   + `[...likeArray]`
>     + 需要迭代器

```js
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
```

### 八、生成器

> `generator`函数，碰到`yield`就会暂停
>
> **生成器**返回的是迭代器`it`，可以使用`next()`使用

```js
function * read() {
  yield 1
  yield 2
  // return undefined
  return 3
}
let it = read()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

```js
let likeArray = { 0: 1, '1': '1', '2': true, 3: 1, length: 3 }
likeArray[Symbol.iterator] = function * (){
  let index = 0
  while(index !== this.length) {
    yield this[index ++]
  }
}
console.log([...likeArray]);
```

