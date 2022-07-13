前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

两种方式：
1. history
History模式是 HTML5新推出的功能，比之 Hash URL 更加美观

①改变路由
history.pushState history.replaceState

②监听路由
popstate事件
window.addEventListener('popstate',handlePopState)

同一个文档的 history 对象出现变化时，就会触发 popstate 事件

history.pushState 可以使浏览器地址改变，但是无需刷新页面。注意⚠️的是：用 history.pushState() 或者 history.replaceState() 不会触发 popstate 事件。 popstate 事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮或者调用 history.back()、history.forward()、history.go()方法。


handlePopState 最后我们来看看当popState监听的函数，当path改变的时候会发生什么，handlePopState 代码很简单 ，判断一下action类型为pop,然后 setState ，从新加载组件。
```js
/* 我们简化一下handlePopState */
const handlePopState = (event)=>{
     /* 获取当前location对象 */
    const location = getDOMLocation(event.state)
    const action = 'POP'

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
        if (ok) {
          setState({ action, location })
        } else {
          revertPop(location)
        }
    })
}

```

2. hash
当 ## 后面的哈希值发生变化时，不会向服务器请求数据，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面
window.addEventListener('hashchange',function(e){
    /* 监听改变 */
})

https://juejin.cn/post/6886290490640039943

总结
history提供了核心api，如监听路由，更改路由的方法，已经保存路由状态state。
react-router提供路由渲染组件，路由唯一性匹配组件，重定向组件等功能组件。
流程分析
当地址栏改变url，组件的更新渲染都经历了什么？😊😊😊
拿history模式做参考。当url改变，首先触发histoy，调用事件监听popstate事件， 触发回调函数handlePopState，触发history下面的setstate方法，产生新的location对象，然后通知Router组件更新location并通过context上下文传递，switch通过传递的更新流，匹配出符合的Route组件渲染，最后有Route组件取出context内容，传递给渲染页面，渲染更新。
当我们调用history.push方法，切换路由，组件的更新渲染又都经历了什么呢？
我们还是拿history模式作为参考，当我们调用history.push方法，首先调用history的push方法，通过history.pushState来改变当前url，接下来触发history下面的setState方法，接下来的步骤就和上面一模一样了，这里就不一一说了。


链接：https://juejin.cn/post/6886290490640039943
