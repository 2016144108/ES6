/*let:用于声明变量，用法类似于var,
但所声明的变量只在let所在代码块内有效
let不会存在var的变量提升现象，即变量没有定义报undefined,而是直接报错,只能先声明再使用，从而形成暂时性死区
暂时性死区:无法访问变量
只要块级作用域内存在let命令，他声明的变量就绑定在这个区域，不受外部影响
ES6规定，如果区块中存在let和const命令，这些区域对这些命令声明的变量，从一开始就形成了封闭的作用域，凡是在声明之前使用这些变量会报错
let变量不允许重复定义
解决函数闭包问题*/

/*1-基本用法*/
var num_1 = 100;
console.log(num_1);
let num_2 = 100;
console.log(num_2);

/*2-ES5作用域:全局变量，局部变量
ES6作用域:全局变量，局部变量，块级变量*/
for(var i = 0; i < 5; i++){
    console.log(i);//ES5全局可以访问到
}
console.log(i);//ES5全局可以访问到
for(let j = 0; j < 5; j++){
    console.log(j);//在let块级代码内可以访问到
}
console.log(j);//不在ES6let块级代码内不可以访问到报错
{
    var a_1 = 10;
    console.log(a_1);
}
console.log(a_1);
{//let代码块
    let a_2 = 10;
    console.log(a_2);//let代码块内
}
console.log(a_2);//let代码块外

/*3-变量提升现象*/
console.log(a);
var a = 10;
console.log(a);
console.log(b);//报错
let b = 20;
console.log(b);

/*4-暂时性死区:无法访问变量
只要块级作用域内存在let命令，他声明的变量就绑定在这个区域，不受外部影响
ES6规定，如果区块中存在let和const命令，这些区域对这些命令声明的变量，从一开始就形成了封闭的作用域，凡是在声明之前使用这些变量会报错*/
if(true){
    console.log(typeof value_1);
    var value_1 = 10;
}
if(true){
    console.log(typeof value_2);//报错
    let value_2 = 10;
}

/*5-let变量不允许重复定义*/
var a_1 = 12;
console.log(a_1);
var a_1 = 'hello';
console.log(a_1);
let a_2 = 12;
console.log(a_2);
let a_2 = 'hello';
console.log(a_2);

/*6-函数闭包问题*/
var arr = [];
for(var i = 0;i < 5;i++){
    arr.push(function () {
        console.log(i)
    });
}
console.log(arr);
arr[0]();
arr[4]();
var arr1 = [];
for(var k = 0;k < 5;k++){
    arr1.push((function (k1) {
        return function () {
            console.log(k1);
        }
    })(k));
}
console.log(arr1);
arr1[0]();
arr1[4]();
let arr2 = [];
for(let j = 0;j < 5;j++){
    arr2.push(function () {
        console.log(j)
    });
}
console.log(arr2);
arr2[0]();
arr2[4]();

