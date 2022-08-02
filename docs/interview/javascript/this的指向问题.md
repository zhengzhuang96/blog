https://www.jianshu.com/p/5f8440535a2a

var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); // 输出结果是 12
            console.log(this); // 输出结果是 b 对象
        }
    }
}
//调用
o.b.fn(); 


var o = {
    a: 10,
    b: {
        a: 12,
        fn: function(){
            console.log(this.a); //undefined 若在对象o外定义a，则输出的就是其在外定义的值(全局变量)
            console.log(this);   // window
        }
    }
}
var j = o.b.fn; //只是将b对象下的方法赋值给j，并没有调用
j(); //调用，此时绑定的对象是window,并非b对象直接调用



function someFun(x) { 
    this.x = x; 
} 
someFun(5); //函数被调用时，this绑定的是全局对象 window,相当于直接声明了一个全局变量x，并赋值为5
console.log(x); // x 已经成为一个值为 5 的全局隐式变量


var point = { 
    x : 0, 
    y : 0, 
    moveTo : function(x, y) { 
       // 内部函数
       var moveX = function(x) { 
           this.x = x;
       }; 
       // 内部函数
       var moveY = function(y) { 
           this.y = y;
       };
       moveX(x); // 这里是全局调用
       moveY(y); 
    }; 
}; 
point.moveTo(1, 1); 
console.log(point.x); // 0
console.log(point.y); // 0





var point = { 
         x : 0, 
         y : 0, 
         moveTo : function(x, y) { 
             this.x = x;
             console.log(this.x); // 1
             console.log(this);   // point对象

             // 内部函数
             var moveX = function(x) { 
                this.x = x;
             }; 
             // 内部函数
             var moveY = function(y) { 
                this.y = y;
             } 
             moveX(x); // 这里是全局调用
             moveY(y); 
         } 
    }; 
    point.moveTo(1, 1); 
    console.log(point.x); // 1
    console.log(point.y); // 0
    console.log(x); // 1
    console.log(y);// 1