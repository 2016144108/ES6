/*应用:*/

/*1-交换变量的值*/
let a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);

/*2-函数返回多个值*/
function fun() {
    return [1, 2, 43];
}
let [d1, d2, d3] = fun();
console.log(d1, d2, d3);
function fu() {
    return {
        name: 'que',
        age: 13,
    };
}
let {name, age} = fu();
console.log(name, age);

/*3-函数参数的解构定义*/
function re([x,y]=[]){
    console.log(x,y);
}
re([2,3]);
re();

/*4-解构取值*/
let student = {
    id: 1,
    name: 'qy',
    age: 12,
    weight: 120,
    height: 178,
}
let {name, age} = student;
console.log(name, age);
let {name: n, age: a} = student;
console.log(n, a);


