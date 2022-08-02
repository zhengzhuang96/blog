---
title: Flutter 原生路由
date: 2022-07-13 15:47:09
tags:
categories: flutter
---

## Flutter 原生路由

#### 1.创建路由文件

新建 lib/router/Routes.dart 文件

```dart
import 'package:flutter/material.dart';
import 'package:mqtt_flutter/pages/index.dart';
import 'package:mqtt_flutter/pages/private_chat.dart';

final routes = {
  '/': (context) => Index(),
  '/privateChat': (context) => PrivateChat(),
};

// 如果你要把路由抽离出去，必须写下面这一堆的代码，不用理解什么意思
var onGenerateRoute = (RouteSettings settings) {
  // 统一处理
  final String name = settings.name;
  final Function pageContentBuilder = routes[name];
  if (pageContentBuilder != null) {
    if (settings.arguments != null) {
      final Route route = MaterialPageRoute(
        builder: (context) => pageContentBuilder(context, arguments: settings.arguments),
      );
      return route;
    } else {
      final Route route = MaterialPageRoute(builder: (context) => pageContentBuilder(context));
      return route;
    }
  }
};
```

#### 2.导入 main 文件

```dart
import 'package:flutter/material.dart';
import 'package:mqtt_flutter/router/Routes.dart';
import 'service/mqtt_client.dart';

void main() => MyApp();

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      /// 路由, 这里是路由模块的固定写法
      initialRoute: '/', // 配置默认访问路径
      onGenerateRoute: onGenerateRoute, // 路由固定写法
    );
  }
}
```

#### 3.使用

```dart
/// 路由跳转
Navigator.pushNamed(context, '/privateChat');

/// 路由返回
Navigator.pop(context);

...
```
