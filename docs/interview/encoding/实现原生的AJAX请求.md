---
title: 实现原生的AJAX请求
date: 2022-07-27 17:47:39
tags: 编程
categories: 面试
---

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

