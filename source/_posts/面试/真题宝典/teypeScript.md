1. 以下两种写法有什么区别?


function render(callback?:()=>void): string
这句ts函数 参数的意思是callback的返回值是函数 返回函数的返回值是void

function render(callback?:void): string
这句ts函数 参数的意思是callback的返回值是void

2. void  any  unknow  never

any 要注意的一点是，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
所以当你一旦使用了一个 any 类型后，很可能意味着打开了潘多拉魔盒，会让某一块的代码变得难以维护。而就算使用了断言，也丧失了在静态类型检查阶段发现错误的可能性

 void 类型表示没有任何类型。
申明为 void 类型的变量，只能赋予 undefined 和 null



3. never 类型表示永远不会有值的一种类型。

let bar: never = (() => {
  throw new Error('Throw my hands in the air like I just dont care');
})();

1 从来不会有返回值的函数（如：如果函数内含有 while(true) {}）；
2 一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo 的返回类型是 never）

never与 void 的差异
一旦有人告诉你，never 表示一个从来不会优雅的返回的函数时，你可能马上就会想到与此类似的 void，然而实际上，void 表示没有任何类型，never 表示永远不存在的值的类型。

当一个函数返回空值时，它的返回值为 void 类型，但是，当一个函数永不返回时（或者总是抛出错误），它的返回值为 never 类型。void 类型可以被赋值（在 strictNullChecking 为 false 时），但是除了 never 本身以外，其他任何类型不能赋值给 never。


unknow
unknown 类型不能赋值给除了 unknown 或 any 的其他任何类型，使用前必需显式进行指定类型，或是在有条件判断情况下能够隐式地进行类型推断的情况。

let value:unknown;
value = 'hello';
(value as string).length



let value:unknown;
value = 'hello';
if (typeof value === 'string') {
  value.length
}


所以在使用时，unknown 类型会比 any 更加安全。这个安全体现在，虽然它和 any 一样存储了任意类型的值，但是具体使用的时候，这个类型需要显式确定，由使用者进行指定将 unknown 转换成某一确定类型。



4. 泛型约束：
于是，我们就得对使用的泛型进行约束，我们约束其为具有length属性的类型，这里我们会用到interface,代码如下

interface Ilength {
    length: number
}

function getLength<T extends Ilength> (arg: T) {
    console.log(arg.length)
    return arg
}
getLength<string>('22')

6. keyof https://cloud.tencent.com/developer/article/1595718