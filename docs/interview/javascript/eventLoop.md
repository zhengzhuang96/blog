https://zhuanlan.zhihu.com/p/364698187


```js
console.log('start');  // 同步1
setTimeout(() => {
    console.log('children2');
    Promise.resolve().then(() => {
        console.log('children3');
    })
}, 0); // 异步1

new Promise(function(resolve, reject) {
    console.log('children4'); // 同步 2
    setTimeout(function() {
        console.log('children5');
        resolve('children6')
    }, 0) // 异步
}).then((res) => {  //需要等待resovle 后方可执行
    console.log('children7');
    setTimeout(() => {
        console.log(res);
    }, 0)
})

```

结果：
start children4 children2 children3 children5 children7 children6