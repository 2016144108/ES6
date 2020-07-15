/*解构：ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，即一种模式匹配*/

/*对数组的解构*/
let arr = [10, 20, 30];
let num = [a, b, c] = arr;
console.log(num);
console.log(a,b,c);

let [a, b] = [{}, 200];
console.log(a, b);//完全解构

//取值过多
let [a, b] = [100];
console.log(a, b);//不完全解构
let[a1, a2, a3]=[[100, 200], 300];
//取值过少
console.log(a1, a2, a3);
let[b1, b2] = [100, 200, 300, 400];
console.log(b1, b2);

//等号两边模式不一样，解构不成功
let [c1, c2] = {
    name: 'jack',
    age: 1,
}
console.log(c1, c2);

//设置默认值
let [d1 = 0, d2 = 0] = [10, 20];
let [d3 = 0, d4 = 0] = [10];
console.log(d1, d2, d3, d4);

