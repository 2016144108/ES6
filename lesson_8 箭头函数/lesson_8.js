//1-无参,单条输出语句
/*如果函数没有参数则箭头函数小括号不能省略
如果函数体只有一条语句，且不是return语句，可以省略{}，但要在语句前加void*/
//一般
let a_1 = function () {
    console.log("asd");
}

function a_2() {
    console.log("asd");
}

//箭头
let a_3 = () => void console.log("asd");

//2-无参,单条return语句
/*如果函数没有参数则箭头函数小括号不能省略
如果函数体只有一条语句，是return语句，可以省略{}*/
//一般
let b_1 = function () {
    return 'asd';
}

function b_2() {
    return 'asd';
}

//箭头
let b_3 = () => 'asd';

//3-无参,函数体有多条语句
/*如果函数没有参数则箭头函数小括号不能省略
如果函数体有多条语句则{}不能省略*/
//一般
let c_1 = function () {
    console.log('asd');
    return 'asd';
}

function c_2() {
    console.log('asd');
    return 'asd';
}

//箭头
let c_3 = () => {
    console.log('asd');
    return 'asd';
}

//4-函数有一个参数
/*如果函数有一个参数则()可以省略
其他同上*/
//一般
let d_1 = function (val) {
    console.log(val);
}

function d_2(val) {
    console.log(val);
}

//箭头
let d_3 = val => void console.log(val);

//5-函数有多个参数
/*如果函数有多个参数则()不可以省略
其他同上*/
//一般
let e_1 = function (v1, v2) {
    console.log(v1, v2);
}

function e_2(v1, v2) {
    console.log(v1, v2);
}

//箭头
let e_3 = (v1, v2) => void console.log(v1, v2);

//6-函数体只有一条return语句且返回为对象，化简为箭头函数对象需要用()包裹
let f_1 = function (name, tite) {
    return {
        name: name,
        tite: tite,
    }
}

function f_2(name, tite) {
    return {
        name: name,
        tite: tite,
    }
}

let f_3 = (name, tite) => ({
    name: name,
    tite: tite,
})

//求圆的面积
let s1 = r => Math.PI * r * r;
//求长方形面积
let s2 = (w, h) => w * h;

/*注意事项
1.this的指向问题
普通函数this指的是调用者
箭头函数this指的是声明者
不能使用箭头函数声明构造函数
原型不能使用箭头函数
1、箭头函数内的this,这得是定义所在对象，而不是使用时所在的对象
2、不可以当做构造函数，即不能使用new命令
3、不可以使用arguments对象，在对象在箭头函数内部不存在，如果要用用rest参数代替
4、不可以使用yield命令，即不能用作Generator函数*/

function t1_1() {
    console.log(this);
}
t1_1();
let t1_2 = function () {
    console.log(this);
}
t1_2();
let t1_3 = () => void console.log(this);
t1_3();

let obj={
    sayhello:function(){
        setTimeout(function () {
            console.log(this,'fun');
        },1000);
        setTimeout(()=>void console.log(this,'=>'),1000);
    }
}
obj.sayhello();
console.log(obj);

function fs(name,title){
    this.name=name;
    this.title=title;
}//这是一个构造函数
let p=new fs('gt',12);
console.log(p);

let fss=(name,title)=>{
    this.name=name;
    this.title=title;
}//这不是构造函数
let p1=new fss('gt',12);
console.log(p1);

function fs1(name,title){
    this.name=name;
    this.title=title;
}
fs1.prototype.say=function(){
    console.log(this.name+'在说话');
}
let p2=new fs1('gt',12);
p2.say();

fs1.prototype.say=()=>void console.log(this.name+'在说话');
let p3=new fs1('gt',12);
p3.say();

function fa1() {
    console.log(arguments);
}
fa1(2,4,6,8);
let fa2=()=>void console.log(arguments);
fa2(2,4,6,8);
let fa3=(...values)=>void console.log(values);
fa3(2,4,6,8);

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function adds(num) {
    let resp = 0;
    num.forEach(function (item) {
        resp += item;
    })
    console.log(resp);
}

adds(num);

function adds2(num) {
    let resp = 0;
    num.forEach((item => resp += item))
    console.log(resp);
}

adds2(num);

console.log(num.map(function (item) {
    return item * 2;
}))
console.log(num.map(item => item * 2))
