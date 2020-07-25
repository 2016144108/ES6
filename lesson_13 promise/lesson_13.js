import './jquery.min.js'
/*同步执行：按书写顺序执行
异步执行：同时执行*/

//同步：
/*console.log('11');
console.log('22');
console.log('33');*/

//异步：
/*setTimeout(()=>void console.log('11'),20);
setTimeout(()=>void console.log('22'),10);
setTimeout(()=>void console.log('33'),30);*/

/*function fn1(){
    setTimeout(()=>void console.log('11'),20);
}
function fn2(){
    setTimeout(()=>void console.log('22'),10);
}
function fn3(){
    setTimeout(()=>void console.log('33'),30);
}
fn1();
fn2();
fn3();*/

//实现按11 22 33 顺序输出
//解决异步队列问题
//回调地狱
/*function fn1(){
    setTimeout(()=>{
        console.log('11');
        setTimeout(()=>{
         console.log('22');
            setTimeout(()=>{
                console.log('33')
            },30)
        },10);
    },20);
}
fn1();*/

/*function fn1(){
    setTimeout(()=>{
        console.log('11');
        fn2()
    },20);
}
function fn2(){
    setTimeout(()=>{
        console.log('22');
        fn3();
    },10);
}
function fn3(){
    setTimeout(()=>void console.log('33'),30);
}
fn1();*/

/*promise含义：是异步编程的一种解决方案，比传统的回调函数和事件更强大
这是一个容器，里面保存着某个未来才会结束的事件的结果
有了promise我们可以将异步操作以同步的方式表达出来，避免了层层嵌套的回调函数*/

/*Promise是一个对象可以new出来
在new的时候，需要将一个函数作为参数传递过去
作为参数的函数，需要接收两个参数resolve, reject，这两个参数自身又是函数
promise状态位：
pending-进行中
fullfilled-已成功
rejected-已失败
状态转换两种：
pending--->fullfilled  统一描述为resolved
pending--->rejected    统一描述为rejected

0常见方法：
then()可以接受两个回调函数作为参数，resolved调用第一个，rejected调用第二个,会返回一个新的promise
catch()
finally()*/
/*let promise =new Promise(function (resolve, reject) {
    //resolve();//成功
    reject('error');//失败
})
promise.then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
})
console.log(promise);*/

/*let p =new Promise(function (resolve, reject) {
    setTimeout(()=>{
        console.log('11');
    },20);
    resolve('成功了');
})
p.then(function (data) {
    console.log(data);
},function (e) {
    console.log(e);
})*/

/*function fn1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('11');
            resolve();
        },20);
    })
}
function fn2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('22');
            resolve();
        },10);
    })
}
function fn3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('33');
            resolve();
        },30);
    })
}
fn1().then(fn2).then(fn3);*/

//promise处理ajax操作
/*let http = new  Promise((resolve, reject) => {
    let xhr=new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/users',true);
    xhr.onreadystatechange=function () {
        if(this.status==200){
            resolve(this.responseText);
        }
    };
    xhr.send(null);
})
http.then(data=>void console.log(data));*/


