---
title: Flutter flutter_mqtt
date: 2022-07-13 15:40:12
tags:
categories: flutter
---

### MQTT 在 flutter 中的使用

#### 安装 mqtt

```dart
mqtt_client: ^6.0.0
```

#### 初始化 mqtt

```dart
int res = await MqttUtils.getInstance().init('客户标签Clients');
print("mqtt init res = $res");
if (res == 0) {
  // 初始化成功
  // runApp(MyApp());
}
```

#### 设置订阅 Topics, 监听某个订阅 Topics 信息

```dart
// testtopic1  ==> 订阅名称
MqttUtils.getInstance().subscribe('testtopic1', callBack: (e) {});
```

#### 发送消息

```dart
// testtopic2 ==> 向某个订阅Topics发送消息
MqttUtils.getInstance().publishMessage('testtopic2', massageData, callBack: (e) {});
```

#### 创建 MqttUtils 类

```dart
import 'dart:io';
import 'package:mqtt_client/mqtt_client.dart';
import 'package:mqtt_client/mqtt_server_client.dart';

final _client = MqttServerClient('192.168.100.119', '');

class MqttUtils {
  static MqttUtils _instance;

  static MqttUtils getInstance() {
    if (_instance == null) {
      _instance = MqttUtils();
    }
    return _instance;
  }

  /// 初始化配置mqtt
  Future<int> init(String userId) async {
    /// 日志
    _client.logging(on: true);

    /// 超时时间s  默认为60s
    _client.keepAlivePeriod = 20;

    /// 连接成功回调
    _client.onConnected = onConnected;

    /// 连接断开回调
    _client.onDisconnected = onDisconnected;

    /// 订阅成功回调
    _client.onSubscribed = onSubscribed;

    _client.pongCallback = ping;

    final connMess = MqttConnectMessage()
        .withClientIdentifier('$userId')
        .keepAliveFor(20) // Must agree with the keep alive set above or not set
        .withWillTopic('willtopic') // If you set this you must set a will message
        .withWillMessage('My Will message')
        .startClean() // Non persistent session for testing
        .withWillQos(MqttQos.atLeastOnce);
    print('EXAMPLE::Mosquitto client connecting....');
    _client.connectionMessage = connMess;

    try {
      await _client.connect();
    } on Exception catch (e) {
      print('MqttUtils::client exception - $e');
      _client.disconnect();
    }

    /// 检查连接状态
    if (_client.connectionStatus.state == MqttConnectionState.connected) {
      print('EXAMPLE::已连接Mosquito客户端');
    } else {
      print('EXAMPLE::错误mosquito客户端连接失败-正在断开连接，状态为 ${_client.connectionStatus.state}');
      _client.disconnect();
      exit(-1);
    }
    return 0;
  }

  /// 订阅消息
  bool subscribe(String topic, {MqttQos qosLevel = MqttQos.atMostOnce, Function callBack}) {
    // 订阅
    _client.subscribe(topic, qosLevel);

    // 监听订阅消息的响应
    _client.updates.listen((dynamic c) {
      final MqttPublishMessage recMess = c[0].payload;
      final pt = MqttPublishPayload.bytesToStringAsString(recMess.payload.message);
      print('EXAMPLE::Change notification:: topic is <${c[0].topic}>, payload is <-- $pt -->');
      print('');
      if (callBack != null) {
        callBack(pt);
      }
    });

    _client.published.listen((MqttPublishMessage message) {
      print('MqttUtils::Published notification:: topic is ${message.variableHeader.topicName}, with Qos ${message.header.qos}');
    });
    return true;
  }

  /// 取消订阅
  bool unsubscribe(String topic) {
    print('MqttUtils::Unsubscribing' + topic);
    _client.unsubscribe(topic);
    return true;
  }

  /// 中断连接
  void disconnect() {
    print('MqttUtils::Disconnecting');
    _client.disconnect();
    _client.securityContext = null;
  }

  bool isConnected() {
    // return _connected;
  }

  /// 发送消息  qualityOfService：对应接口文档的 qos 参数
  void publishMessage(String topic, String jsonString, { Function callBack }) {
    print(topic);
    print(jsonString);
    final builder1 = MqttClientPayloadBuilder();
    builder1.addString(jsonString);
    print('EXAMPLE:: <<<< PUBLISH 1 >>>>');
    _client.publishMessage(topic, MqttQos.atLeastOnce, builder1.payload);
    callBack(jsonString);
  }
}

/// 连接成功的回调
void onConnected() {
  print('MqttUtils::OnConnected client callback - Client connection was sucessful');
}

void onSubscribed(String topic) {
  print('已确认订阅主题 $topic');
}

/// The unsolicited disconnect callback
void onDisconnected() {
  print('-客户端断开连接');
  print('MqttUtils::OnDisconnected client callback - Client disconnection');
  if (_client.connectionStatus.returnCode == MqttConnectReturnCode.solicited) {
    print('MqttUtils::OnDisconnected callback is solicited, this is correct');
  }
}

void ping() {
  print('MqttUtils::Ping response client callback invoked');
}
```
