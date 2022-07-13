js 和 ts 区别

1. 语言层面：JavaScript和TypeScript都是ECMAScript（ECMA-262）的具体实现。
2. 执行环境层面：浏览器引擎和Node.js都能够直接运行JavaScript，但无法直接运行TypeScript。
3. 时序层面：TypeScript被真正执行前，会通过编译转换生成JavaScript，之后才能被解释执行
4. TypeScript是ECMAScript 2015的语法超集，是JavaScript的语法糖。JavaScript程序可以直接移植到TypeScript，TypeScript需要编译（语法转换）生成JavaScript才能被浏览器执行。
5. ts 有面向对象语言的特性的接口、继承、强类型，泛型 的概念
6. 还有命名空间的的概念
7. 增加了js没有的静态类型检查。保证质量，更好写作，静态类型多在编译时。更好的ide 的支持有语法提示，还有编译语法检测。




接口：接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，
interface interface_name { 
}

interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 



接口继承
接口继承就是说接口可以通过其他接口来扩展自己。
 Typescript 允许接口继承多个接口。
继承使用关键字 extends。


类 class

字段 − 字段是类里面声明的变量。字段表示对象的有关数据。

构造函数 − 类实例化时调用，可以为类的对象分配内存。

方法 − 方法为对象要执行的操作。

class Person {
}

类继承 extents


类和接口
类可以实现接口，使用关键字 implements，并将 interest 字段作为类的属性使用。



泛型是什么

在像 C# 和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

function identity (value: Number) : Number {
  return value;
}

console.log(identity(1)) // 1
这里 identity 的问题是我们将 Number 类型分配给参数和返回类型，使该函数仅可用于该原始类型。但该函数并不是可扩展或通用的，很明显这并不是我们所希望的。

我们确实可以把 Number 换成 any，我们失去了定义应该返回哪种类型的能力，并且在这个过程中使编译器失去了类型保护的作用。我们的目标是让 identity 函数可以适用于任何特定的类型，为了实现这个目标，我们可以使用泛型来解决这个问题，具体实现方式如下：

function identity <T>(value: T) : T {
  return value;
}

当我们调用 identity<Number>(1) ，Number 类型就像参数 1 一样，它将在出现 T 的任何位置填充该类型。图中 <T> 内部的 T 被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，同时它被分配给 value 参数用来代替它的类型：此时 T 充当的是类型，而不是特定的 Number 类型。

相比之前定义的 identity 函数，新的 identity 函数增加了一个类型变量 U，但该函数的返回类型我们仍然使用 T。如果我们想要返回两种类型的对象该怎么办呢？针对这个问题，我们有多种方案，其中一种就是使用元组，即为元组设置通用的类型：
function identity <T, U>(value: T, message: U) : [T, U] {
  return [value, message];
}



虽然使用元组解决了上述的问题，但有没有其它更好的方案呢？答案是有的，你可以使用泛型接口。

二、泛型接口

interface Identities<V, M> {
  value: V,
  message: M
}

三：泛型约束 确保属性存在
继承 extends
T extends Length 用于告诉编译器，我们支持已经实现 Length 接口的任何类型。之后，当我们使用不含有 length 属性的对象作为参数调用 identity 函数时，TypeScript 会提示相关的错误信息：

interface Length {
  length: number;
}

function identity<T extends Length>(arg: T): T {
  console.log(arg.length); // 可以获取length属性
  return arg;
}
此外，我们还可以使用 , 号来分隔多种约束类型，比如：<T extends Length, Type2, Type3>。

四：检查对象上的键是否存在

泛型约束的另一个常见的使用场景就是检查对象上的键是否存在。不过在看具体示例之前，我们得来了解一下 keyof 操作符，keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
```js
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```
在以上的 getProperty 函数中，我们通过 K extends keyof T 确保参数 key 一定是对象中含有的键，这样就不会发生运行时错误。这是一个类型安全的解决方案，与简单调用 let value = obj[key]; 不同。


五、泛型参数默认类型
在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推断出类型时，这个默认类型就会起作用
```js
interface A<T=string> {
  name: T;
}

const strA: A = { name: "Semlinker" };
const numB: A<number> = { name: 101 };

```

泛型参数的默认类型遵循以下规则：

有默认类型的类型参数被认为是可选的。
必选的类型参数不能在可选的类型参数后。
如果类型参数有约束，类型参数的默认类型必须满足这个约束。
当指定类型实参时，你只需要指定必选类型参数的类型实参。 未指定的类型参数会被解析为它们的默认类型。
如果指定了默认类型，且类型推断无法选择一个候选类型，那么将使用默认类型作为推断结果。
一个被现有类或接口合并的类或者接口的声明可以为现有类型参数引入默认类型。
一个被现有类或接口合并的类或者接口的声明可以引入新的类型参数，只要它指定了默认类型。


六、泛型条件类型
T extends U ? X : Y
上表达式的意思是：若 T 能够赋值给 U，那么类型是 X，否则为 Y。在条件类型表达式中，我们通常还会结合 infer 关键字，实现类型抽取：

七、泛型工具类型
为了方便开发者 TypeScript 内置了一些常用的工具类型，比如 Partial、Required、Readonly、Record 和 ReturnType 等。出于篇幅考虑，这里我们只简单介绍其中几个常用的工具类型。

Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。

type Partial<T> = {
    [P in keyof T]?: T[P];
};

Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

### 文档
https://juejin.cn/post/6844904184894980104#heading-14



八 命名空间
命名空间一个最明确的目的就是解决重名问题。

以上定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字。

namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
}
要在另外一个命名空间调用语法格式为：
SomeNameSpaceName.SomeClassName;


如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：

/// <reference path = "SomeFileName.ts" />

```ts
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}
```

十一：多文件中的命名空间
现在，我们把Validation命名空间分割成多个文件。 尽管是不同的文件，它们仍是同一个命名空间，并且在使用的时候就如同它们在一个文件中定义的一样。 因为不同文件之间存在依赖关系，所以我们加入了引用标签来告诉编译器文件之间的关联。 我们的测试代码保持不变。


Validation.ts
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}



LettersOnlyValidator.ts 

```ts
/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
```

十二
别名
另一种简化命名空间操作的方法是使用import q = x.y.z给常用的对象起一个短的名字。 不要与用来加载模块的 import x = require('name')语法弄混了，这里的语法是为指定的符号创建一个别名。 你可以用这种方法为任意标识符创建别名，也包括导入的模块中的对象。

namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as "new Shapes.Polygons.Square()"


十三 编译上下文 tsconfig.json 文件

```js
{
  "compilerOptions": {

    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
  }
}
```


ts 的最新版本和特性：
https://juejin.cn/post/6861768102296682503

1. 短路运算的赋值
2. 数组中也可以运用泛型
3. delete 必须为可选类型
4. unknow 可以使用在catch 中 代替any
5. Insiders 编辑器支持部分编辑/加载模式
6. /** @deprecated */ 支持

