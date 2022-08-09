WebP 是由Google开发的一种新的图片格式，它支持有损压缩、无损压缩和透明度，压缩后的文件大小比JPEG、PNG等都要小
WebP 的兼容性还不是很好，不过好在它兼容 Chrome，以及 Android 的 webview。 因为不是所有浏览器都支持 WebP 格式，为了解决问题，

使用JS替换图片的URL，类似图片懒加载的原理，根据浏览器是否支持 WebP 格式，给 img 的 src 赋不同的值。
具体的操作就是给浏览器一个 WebP 格式的图片，看浏览器是否能正确渲染，在这个异步的方法中根据渲染的成功与否，执行回调函数，然后将结果存储在localstorage中，避免重复检查。代码如下：
