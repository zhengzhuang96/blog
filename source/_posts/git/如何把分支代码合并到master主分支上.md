### 如何把分支代码合并到master主分支上

1.首先切换到分支；

```
git checkout hellomonkey
```

2.使用git pull 把分支代码pull下来；

```
git pull
```

3.切换到主分支；

```
git checkout master
```

4.把分支的代码merge到主分支；

```
git merge hellomonkey
```

5.git push推上去ok完成,现在 你自己分支的代码就合并到主分支上了。

```
git push
```

同理，主分支的文件也可以合并的分支上。

