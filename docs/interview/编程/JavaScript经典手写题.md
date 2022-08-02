---
title: JavaScript经典手写题
date: 2022-07-27 17:59:37
tags: 编程
categories: 面试
---

### 实现原生的AJAX请求

```js
const ajax = {
    get(url, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)// 第三个参数异步与否
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send()
    },
    post(url, data, fn) {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                fn(xhr.responeText)
            }
        }
        xhr.send(data)
    }
}
```

### 手写 new 的过程

new操作符做了这些事：

- 它创建了一个全新的对象
- 它会被执行[[Prototype]]（也就是__proto__）链接
- 它使this指向新创建的对象
- 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
- 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用

```js
function myNew(fn, ...args) {

    const obj = {}

    obj.__proto__ = fn.prototype

    fn.apply(obj, args)

    return obj
}
```

### instanceof关键字

```js
function instanceOf(L, R) {
  // L 表示左表达式，R 表示右表达式
  const fp = R.prototype; // 取 R 的显示原型
  var cp = L.__proto__; // 取 L 的隐式原型

    while (cp) {
        if (cp === fp) { // 这里重点：当 fp 严格等于 cp 时，返回 true
            return true
        }
        cp = cp.__proto__
    }

    return false
}
```

### 实现防抖函数

```js
function debounce(fn, delay = 500) {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        const args = arguments        
        timer = setTimeout(() => {
            fn.apply(this, args) // 改变this指向为调用debounce所指的对象
        }, delay)
    }
}
```

### 实现节流函数

```js
function throttle(fn, delay = 200) {
    let flag = true
    return function () {
        if (!flag) return
        flag = false
        const args = arguments
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}
```

### 实现数组去重

> 题目描述：实现一个数组的去重

```js
// 第一种：Map记录
function quchong1(arr) {
    const newArr = []
    arr.reduce((pre, next) => {
        if (!pre.has(next)) {
            pre.set(next, 1)
            newArr.push(next)
        }
        return pre
    }, new Map())
    return newArr
}

// 第二种：Set去重
function quchong2(arr) {
    return [...new Set(arr)]
}
```

### 用setTimeout实现setInterval

> 题目描述：setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗

```js
function mySetTimout(fn, delay) {
    let timer = null
    const interval = () => {
        fn()
        timer = setTimeout(interval, delay)
    }
    setTimeout(interval, delay)
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

// 测试
const { cancel } = mySetTimout(() => console.log(888), 1000)
setTimeout(() => {
    cancel()
}, 4000)
```

### 用setInterval实现setTimeout

> 题目说明：没有，就是想刁难你

```js
function mySetInterval(fn, delay) {
    const timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, delay)
}

// 测试
mySetInterval(() => console.log(888), 1000)
```

### 实现一个compose函数

> 题目说明：实现以下效果

```js
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a)
console.log(a(1)); // 1+2+3+4=11
```

> 实现如下：

```js
function compose(...fn) {
    if (fn.length === 0) return (num) => num
    if (fn.length === 1) return fn[0]
    return fn.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}
```

### 实现一个科里化函数

> 题目要求：

```js
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3)) // 1 + 2 + 3=6
```

> 实现如下：

```js
function currying(fn, ...args1) {
  // 获取fn参数有几个
  const length = fn.length
  let allArgs = [...args1]
  const res = (...arg2) => {
    allArgs = [...allArgs, ...arg2]
    // 长度相等就返回执行结果
    if (allArgs.length === length) {
      return fn(...allArgs)
    } else {
      // 不相等继续返回函数
      return res
    }
  }
  return res
}

// 测试：
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2,3))
```

### 实现一个LRU缓存函数

> 题目说明：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/866902be3c894edebc9a70446ed664df~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

> 实现如下：

```js
class LRUCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }

  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    } else {
      return -1
    }
  }

  put(key, val) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, val)
    if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }

}
```

### 简单实现 发布订阅模式

> 题目描述:实现一个发布订阅模式拥有`on emit once off`方法

```js
class EventEmitter {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        const tasks = this.cache[name]
        if (tasks) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    off(name, fn) {
        const tasks = this.cache[name]
        if (task) {
            const index = tasks.findIndex(item => item === fn)
            if (index >= 0) {
                this.cache[name].splice(index, 1)
            }
        }
    }

    emit(name, ...args) {
        // 复制一份。防止回调里继续on，导致死循环
        const tasks = this.cache[name].slice()
        if (tasks) {
            for (let fn of tasks) {
                fn(...args)
            }
        }
    }

    once(name, cb) {
        function fn(...args) {
            cb(args)
            this.off(name, fn)
        }
        this.on(name, fn)
    }
}
```

### 实现JSON.parse

> 题目描述：实现`JSON.parse`

```js
function parse (json) {
    return eval("(" + json + ")");
}
```

### 将DOM转化成树结构对象

> 题目描述：

```js
<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

// 将上方的DOM转化为下面的树结构对象

{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}
```

> 实现如下：

```js
function dom2tree(dom) {
    const obj = {}
    obj.tag = dom.tagName
    obj.children = []
    dom.childNodes.forEach(child => obj.children.push(dom2tree(child)))
    return obj
}
```

### 将树结构转换为DOM

> 题目描述：

```js
{
    tag: 'DIV',
    children: [
        { tag: 'SPAN', children: [] },
        {
            tag: 'UL',
            children: [
                { tag: 'LI', children: [] },
                { tag: 'LI', children: [] }
            ]
        }
    ]
}

将上方的树结构对象转化为下面的DOM

<div>
    <span></span>
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>
```

> 实现如下：

```js
// 真正的渲染函数
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => dom.appendChild(_render(child)));
  return dom;
}
```

### 判断一个对象有环引用

> 题目描述：验证一个对象有无环引用

```js
var obj = {
    a: {
        c: [
            1, 2
        ]
    },
    b: 1
}
obj.a.c.d = obj
console.log(cycleDetector(obj)) // true
```

> 实现思路：用一个数组存储每一个遍历过的对象，下次找到数组中存在，则说明环引用

```js
function cycleDetector(obj) {
    const arr = [obj]
    let flag = false

    function cycle(o) {
        const keys = Object.keys(o)
        for (const key of keys) {
            const temp = o[key]
            if (typeof temp === 'object' && temp !== null) {
                if (arr.indexOf(temp) >= 0) {
                    flag = true
                    return
                }
                arr.push(temp)
                cycle(temp)
            }
        }
    }

    cycle(obj)

    return flag
}
```

### 计算一个对象的层数

> 题目描述：给你一个对象，统计一下它的层数

```js
const obj = {
    a: { b: [1] },
    c: { d: { e: { f: 1 } } }
}

console.log(loopGetLevel(obj)) // 4
```

> 实现如下:

```js
function loopGetLevel(obj) {
    var res = 1;

    function computedLevel(obj, level) {
        var level = level ? level : 0;
        if (typeof obj === 'object') {
            for (var key in obj) {
                if (typeof obj[key] === 'object') {
                    computedLevel(obj[key], level + 1);
                } else {
                    res = level + 1 > res ? level + 1 : res;
                }
            }
        } else {
            res = level > res ? level : res;
        }
    }
    computedLevel(obj)

    return res
}
```

### 对象的扁平化

> 题目描述：

```js
const obj = {
  a: {
         b: 1,
         c: 2,
         d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }
 
 flatten(obj) 结果返回如下
 // {
 //  'a.b': 1,
 //  'a.c': 2,
 //  'a.d.e': 5,
 //  'b[0]': 1,
 //  'b[1]': 3,
 //  'b[2].a': 2,
 //  'b[2].b': 3
 //   c: 3
 // }
```

> 实现如下：

```js
const isObject = (val) =>  typeof val === "object" && val !== null

function flatten(obj) {
  if (!isObject(obj)) return
  const res = {}
  const dfs = (cur, prefix) => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => {
          dfs(item, `${prefix}[${index}]`)
        })
      } else {
        for(let key in cur) {
          dfs(cur[key], `${prefix}${prefix ? '.' : ''}${key}`)
        }
      }
    } else {
      res[prefix] = cur
    }
  }
  dfs(obj, '')
  return res
}

// 测试
console.log(flatten(obj))
```

### 实现(a == 1 && a == 2 && a == 3)为true

> 题目描述：`实现(a == 1 && a == 2 && a == 3)为true`

```js
// 第一种方法
var a = {
  i: 1,
  toString: function () {
    return a.i++;
  }
}
console.log(a == 1 && a == 2 && a == 3) // true

// 第二种方法
var a = [1, 2, 3];
a.join = a.shift;
console.log(a == 1 && a == 2 && a == 3); // true

// 第三种方法
var val = 0;
Object.defineProperty(window, 'a', {
    get: function () {
        return ++val;
    }
});
console.log(a == 1 && a == 2 && a == 3) // true
```

### 实现限制并发的Promise调度器

> 题目描述：JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

```js
addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");
的输出顺序是：2 3 1 4

整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
```

> 实现如下：

```js
class Scheduler {
  constructor(limit) {
    this.queue = []
    this.limit = limit
    this.count = 0
  }
  

  add(time, order) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(order)
          resolve()
        }, time)
      })
    }
    this.queue.push(promiseCreator)
  }

  taskStart() {
    for(let i = 0; i < this.limit; i++) {
      this.request()
    }
  }

  request() {
    if (!this.queue.length || this.count >= this.limit) return
    this.count++
    this.queue.shift()().then(() => {
      this.count--
      this.request()
    })
  }
}

// 测试
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();
```

### 实现lazyMan函数

> 题目描述：

```js
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
```

> 实现如下：

```js
class _LazyMan {
  constructor(name) {
    this.tasks = []
    const task = () => {
      console.log(`Hi! This is ${name}`)
      this.next()
    }
    this.tasks.push(task)
    setTimeout(() => {
      this.next()
    }, 0)
  }
  next() {
    const task = this.tasks.shift()
    task && task()
  }
  sleep(time) {
    this.sleepWrapper(time, false)
    return this
  }
  sleepFirst(time) {
    this.sleepWrapper(time, true)
    return this
  }
  sleepWrapper(time, first) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`)
        this.next()
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task)
    } else {
      this.tasks.push(task)
    }
  }
  eat(food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}

// 测试
const lazyMan = (name) => new _LazyMan(name)

lazyMan('Hank').sleep(1).eat('dinner')

lazyMan('Hank').eat('dinner').eat('supper')

lazyMan('Hank').eat('supper').sleepFirst(5)
```

### 实现add函数

> 题目描述：实现一个 add 方法 使计算结果能够满足如下预期：
>
> - add(1)(2)(3)()=6
> - add(1,2,3)(4)()=10

```js
function add(...args1) {
  let allArgs = [...args1]

  function fn(...args2) {
    if (!args2.length) return fn.toString()
    allArgs = [...allArgs, ...args2]
    return fn
  }

  fn.toString = function () {
    return allArgs.reduce((pre, next) => pre + next)
  }

  return fn
}

// 测试
console.log(add(1)(2)(3)())
console.log(add(1, 2)(3)())
```

### 实现一个合格的深拷贝

推荐看我这篇：[深拷贝有这5个段位，你只是青铜段位？还想涨薪？](https://juejin.cn/post/7017991655009566728)

### 实现 Promise

推荐看我这篇：[看了就会，手写Promise原理，最通俗易懂的版本！！！](https://juejin.cn/post/6994594642280857630)【阅读：1.3w，点赞：460】

### 实现 async/await

推荐看我这篇：[7张图，20分钟就能搞定的async/await原理！为什么要拖那么久？](https://juejin.cn/post/7007031572238958629)【阅读：2.15w，点赞：460】


