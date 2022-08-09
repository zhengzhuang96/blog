---
title: MAC上安装brew方式及使用技巧
date: 2022-07-13 15:50:56
tags:
categories: mac
---

Mac下修改hosts 解决访问github慢的问题
mac下hosts文件在 /etc/hosts。

所以先打开终端。然后输入如下命令,打开hosts文件。

```bash
sudo vim /etc/hosts
```

然后将

https://raw.fastgit.org/521xueweihan/GitHub520/main/hosts

这个网址里的东西复制进去，差不多就好了

