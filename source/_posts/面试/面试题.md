一： Vue router: https://juejin.cn/post/6844904169954869262
前端路由
随着前端单页应用(SPA)的兴起，前端页面完全变成了组件化，不同的页面就是不同的组件，页面的切换就是组件的切换；页面切换的时候不需要再通过http请求，直接通过JS解析url地址，然后找到对应的组件进行渲染

前端路由的优点就是组件切换不需要发送http请求，切换跳转快，用户体验好；缺点就是没有合理的利用缓存且不利于SEO

 分为 hash 和 history 两种模式，这两种方式都不会向服务器发起新的请求，hash通过监听hashChange事件改变路由， history 方式通过监听 popState 事件来改变路由。router 获取的方式：hash 通过location.hash， history 通过 location.pathname
 history模式是另一种前端路由模式，它基于HTML5的history对象
通过location.pathname获取到当前url的路由地址；history模式下，通过pushState和replaceState方法可以修改url地址，结合popstate方法监听url中路由的变化

Vue Routrer核心是：通过Vue.use 注册插件获取router的配置。当url 改变时，router 获取路由和对应的组件，保存一个当前的路由对象current，当浏览器地址改变的时候修改对象current。当current 改变时获取相应的component进行视图渲染
vue-router工作流程

1. 创建一个current 对象记录当前url
2. 监听hashChange 或者popState 事件，通过pushState和replaceState方法可以修改url地址，改变current 
3. 监视current变量的监视者
4. 在路由列表中查找路由对应的组件
5. render 渲染到页面上
Vue.use()方法用于插件安装，通过它可以将一些功能或API入侵到Vue内部；
install方法接收一个Vue实例作为参数，通过Vue.mixin()全局混入beforeCreated生命周期钩子；通过Vue实例暴露的工具方法defineReactive将current属性变成一个监视者

二： VUE2 和VUE3 的区别
vue2 无法监听数组的变化，因为性能收益 问题没有对数组每个元素加上监听https://blog.csdn.net/JackieDYH/article/details/114253038
1.object.defineProperty 和 proxy 的区别
proxy： 代理：拦截对象，可以访问整个对象的所有属性，省去了对对象所有属性的遍历，和对嵌套对象的深度遍历
object.defineProperty： 必须遍历对象的每个属性结合object.keys().forEach 

2.vue3 框架改用ts 语言，所以可以更好的支持了ts 

3.vue3 支持响应式API，函数式编程，例如react 的hooks 。抛弃生命周期可以将逻辑抽离成更小的函数，方便复用。

4.虚拟dom与静态标记/事件缓存：vue 模版的优化，递归便利每一个节点标记是否是静态节点，静态节点不会加入diff算法的比较，
5.传入的事件会自动生成并缓存一个内联函数再cache里，变为一个静态节点。这样就算我们自己写内联函数，也不会导致多余的重复渲染。



二： VUEX 原理：
 state， getters， muttations， actions， moudule
辅助函数： mapState，mapGetters， MapActions，MapMutations

1.使用Vuex只需执行 Vue.use(Vuex)，并在Vue的配置中传入一个store对象的示例，store是如何实现注入的？
    1.利用vue.use 方法进行vuex 的安装，然后利用全局mixin方法在vue 的beforeCreated 生命周期的钩子上将传入的store 对象设置到vue 上下文环境的$store中。因此在Vue Component任意地方都能够通过this.$store访问到该store。

2.vuex的state和getters是如何映射到各个组件实例中响应式更新状态呢？
    vuex 的state 是响应式的，是借助vue的data实现的响应式，将state存入vue 实例组件的data 中，vuex的getters是借助vue的computed实现实时监听的

3.state内部支持模块配置和模块嵌套，如何实现的？
在store构造方法中有makeLocalContext方法，所有module都会有一个local context，根据配置时的path进行匹配。所以执行如dispatch('submitOrder', payload)这类action时，默认的拿到都是module的local state，如果要访问最外层或者是其他module的state，只能从rootState按照path路径逐步进行访问。


四： Vue 中 key 的作用是：key 是为 Vue 中 vnode 的唯一标记，通过这个 key，我们的 diff 操作可以更准确、更快速

五：vue 文件如何渲染和一个html 页面的

六： 组件间的通信方式（vue& react）
react：props，ref， 回调函数，context，redux
vue：props， ref，$emit, eventBus，用多了容易混乱 （parent, children 不推荐）

七： nextTick
nextTick() 是将回调函数延迟在下一次dom更新数据后调用，简单理解是数据更新了，dom 中渲染后，自动执行该函数。
nextTick 的作用：created 勾子执行的时候dom 并未渲染，mounted 勾子所有dom 已经渲染完成，所以想要在created 上操作dom 就需要使用nextTick（）

Vue.nextTick(callback) 使用原理：
原因是，Vue 是异步执行 dom 更新的，一旦观察到数据变化，Vue 就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个 watcher 被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和 DOm 操作。而在下一个事件循环时，Vue 会清空队列，并进行必要的 DOM 更新。 当你设置 vm.someData = ‘new value’，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的 DOM 更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。



30 道vue 面试题：https://juejin.cn/post/6844903918753808398
https://mp.weixin.qq.com/s/NkUZCBkX-NoF6yVDkavcsA

Keep- Alive：
keep-alive是Vue.js的一个内置组件。它能够不活动的组件实例保存在内存中，而不是直接将其销毁，它是一个抽象组件，不会被渲染到真实DOM中，也不会出现在父组件链中。它提供了include与exclude两个属性，允许组件有条件地进行缓存。
keep-alive提供了两个生命钩子，分别是activated与deactivated。
因为keep-alive会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的created等方法，需要用activated与deactivated这两个生命钩子来得知当前组件是否处于活动状态。
原理：在 created 函数调用时将需要缓存的 VNode 节点保存在 this.cache 中；在 render（页面渲染） 时，如果 VNode 的 name 符合缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。

响应式数据原理
默认 Vue 在初始化数据时，会给 data 中的属性使用 Object.defineProperty 重新定义所有属性，当页面到对应属性时，会进行依赖收集(收集当前组件中的 watcher)如果属性发生变化会通知相关依赖进行更新操作在响应式属性发生更新时通知 Watcher 去重新调用 vm._update(vm._render()) 进行组件的视图更新

vue 采用异步渲染：因为如果不采用异步更新，那么每次更新数据都会对当前租金按进行重新渲染，所以为了性能考虑，Vue 会在本轮数据更新后，再去异步更新数据

Vue Mixin 的缺点：依赖不明确，命名如果冲突本地覆盖mixin。vue3 composition API更好

vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？
无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
原理就是重写数组的七个原始方法,当使用者执行这些方法时,我们就可以监听到数据的变化,然后再使用原形上的方法然后做些跟新操作,下面我们在observer中加上关于对数组的判断


VUE 数据的双向绑定原理：Vue实现数据双向绑定主要利用的就是: 数据劫持和发布订阅模式。
所谓发布订阅模式就是，定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，当一个对象发生改变时，所有依赖于它的对象都将得到通知。

所谓数据劫持，就是利用JavaScript的访问器属性，即Object.defineProperty()方法或者proxy 方法，当对对象的属性进行赋值时，Object.defineProperty就可以通过set方法劫持到数据的变化，然后通知发布者(主题对象)去通知所有观察者，观察者收到通知后，就会对视图进行更新。

在创建Vue实例的过程中，会对Vue data中的数据进行数据劫持操作，即将data上的属性都通过Object.definePropery()的方式代理到Vue实例上，当View视图或者Vue Model中发生数据变化的时候，就会被劫持，然后通知Dep发布者对象进行视图的更新，从而实现数据的双向绑定。


Vue3.0中Ref与Reactive的区别是什么

上面我们提到 reactive 只能给对象，数组 添加响应式，如果想给值类型(String，Number，Boolean，Symbol)添加响应式，就要用到ref，所以ref作用如下：


首先我们都知道ref函数和reactive函数都是用来定义响应式数据；
但是reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）

Ref在模板调用可以直接省略value，在方法中改变变量的值需要修改value的值，才能修改成功。Reactive在模板必须写全不然显示整个数据。

Reactive的本质是将每一层的数都解析成proxy对象，Reactive 的响应式默认都是递归的，改变某一层的值都会递归的调用一遍，重新渲染dom。
参数必须是对象或者数组，如果要让对象的某个元素实现响应式时比较麻烦。需要使用toRefs

ref:
(1)函数参数可以是基本数据类型，也可以接受对象类型

(2)如果参数是对象类型时，其实底层的本质还是reactive,系统会自动根据我们给ref传入的值转换成：
ref(1)->reactive({value:1})

ref函数只能操作浅层次的数据，把基本数据类型当作自己的属性值；深层次依赖于reactive

ref响应式原理是依赖于Object.defineProperty()的get()和set()的。


toRef
针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式
两者 保持引用关系

 setup () {
    // 响应式对象
    const state = reactive({
      name: '太凉',
      age: 18
    })

    // 通过toRef创建一个Ref响应式
    const nameRef = toRef(state, 'name')
 }

toRefs
toRefs 是一种用于破坏响应式对象并将其所有属性转换为 ref 的实用方法

将响应式对象（reactive封装）转成普通对象
对象的每个属性(Prop)都是对应的ref
两者保持引用关系