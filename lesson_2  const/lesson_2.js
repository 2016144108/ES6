/*const 定义一个常量(不能被修改)
但所声明的变量只在const所在代码块内有效
const不会存在var的变量提升现象，即变量没有定义报undefined,而是直接报错,只能先声明再使用，从而形成暂时性死区
暂时性死区:无法访问变量
只要块级作用域内存在const命令，他声明的变量就绑定在这个区域，不受外部影响
ES6规定，如果区块中存在let和const命令，这些区域对这些命令声明的变量，从一开始就形成了封闭的作用域，凡是在声明之前使用这些变量会报错
const变量不允许重复定义
const不允许改变值
const初始化即赋值
解决函数闭包问题*/
var num = 10;
console.log(num);
num = 20;
console.log(num);

const num_1 = 10;
console.log(num_1);
num_1 = 20;//不能被修改
console.log(num_1);

/*const定义即初始化即赋值*/
let a_1;
a_1 = 10;
console.log(a_1);

const a_2;//报错
a_2 = 10;
console.log(a_2);

/*2-ES5作用域:全局变量，局部变量
ES6作用域:全局变量，局部变量，块级变量*/
{
    var n_1 = 10;
    console.log(n_1);
}
console.log(n_1);
{//let代码块
    const n_2 = 10;
    console.log(n_2);//const代码块内
}
console.log(n_2);//const代码块外

/*3-变量提升现象
4-暂时性死区:无法访问变量
只要块级作用域内存在const命令，他声明的变量就绑定在这个区域，不受外部影响
ES6规定，如果区块中存在let和const命令，这些区域对这些命令声明的变量，从一开始就形成了封闭的作用域，凡是在声明之前使用这些变量会报*/
if(true){
    console.log(typeof value_1);
    var value_1 = 10;
}
if(true){
    console.log(typeof value_2);//报错
    const value_2 = 10;
}

/!*5-const变量不允许重复定义*!/
var a_1 = 12;
console.log(a_1);
var a_1 = 'hello';
console.log(a_1);
const a_2 = 12;
console.log(a_2);
const a_2 = 'hello';
console.log(a_2);

/*引用类型,引用地址无法改变内容可以改变，可以使用Object.freeze()冰冻类型*/
const arr = [ 10, 20 ,30];
console.log(arr);
arr = [10, 22, 30];//改变数组报错
console.log(arr)
arr[0] = 12;//改变数组内容不报错
console.log(arr);

const arr ={
    name : 11,
    age : 12,
}
console.log(arr);
arr.age=20;
console.log(arr);
const nu = Object.freeze([10, 20 ,30]);
console.log(nu);
nu[1] = 22;//不报错也不生效
console.log(nu);
