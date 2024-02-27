// 核心就在于调用完的方法将自身实例返回

// 1）示例一
// function  Class1(){
//     console.log('init');
// }

// Class1.prototype.method = function (param){
//     console.log(param);
//     return this
// }

// // 由于 new 在实例化的时候 this 会指向创建的对象， 所以 this.method 这个方法会在原型链中找到
// let c1 = new Class1();
// c1.method('第一次调用').method('第二次调用').method('第三次调用')
// init
// 第一次调用
// 第二次调用
// 第三次调用

// 2）示例二
var obj = {
    a : function (){
        console.log('a');
        return this
    },
    b : function (){
        console.log('b');
        return this 
    },
    c : function (){
        console.log('c');
        return this 
    }
}

obj.a().b().c();
// a
// b
// c