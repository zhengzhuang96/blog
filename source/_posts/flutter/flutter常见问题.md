---
title: Flutter 常用库及时使用入门级方法(一些经常用到的)
date: 2022-07-13 15:40:12
tags:
categories: flutter
---

### AndroidX

[!] Your app isn't using AndroidX.

 To avoid potential build failures, you can quickly migrate your app by following the steps on https://goo.gl/CP92wY.

在 gradle.properties 中添加如下代码即可

```
android.enableJetifier=true
android.useAndroidX=true
```

#### flutter 超出容器

只需要在外面包裹一层

```
SingleChildScrollView(
    child:xxx
)
```

#### flutter 应用前后台

```dart
@override
void didChangeAppLifecycleState(AppLifecycleState state) {
  switch (state) {
    case AppLifecycleState.inactive: // 处于这种状态的应用程序应该假设它们可能在任何时候暂停。
      break;
    case AppLifecycleState.resumed:  // 应用程序可见，前台
      break;
    case AppLifecycleState.paused:   // 应用程序不可见，后台
      break;
    case AppLifecycleState.detached: // 申请将暂时暂停
      break;
  }
}
```
