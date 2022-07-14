```
title: rollup打包问题
tags:
categories: 前端
```

### rollup打包警告

1. (!) Unresolved dependencies

   ```bash
   (!) Unresolved dependencies
   https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
   path (imported by lib/create.ts)
   ```

   因为我的ts里面有依赖其他的包，如下

   ```tsx
   import { join } from "path";
   ```

   所以当打包成umd格式时无法找到外部的依赖，导致报错。

   ##### 解决办法：

   安装`@rollup/plugin-node-resolve`, 并引入`rollup.config.js`中

   ```js
   import nodeResolve from "@rollup/plugin-node-resolve";
   
   export default {
     ...
     plugins: [
       ...
       nodeResolve({
         preferBuiltins: true,
       }),
     ],
   };
   ```

   这次，当你运行 yarn build， 再没有警告输出-打包文件 bundle 包含了引用的模块。