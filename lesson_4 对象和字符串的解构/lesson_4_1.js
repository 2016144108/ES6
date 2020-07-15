/*解构：ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，即一种模式匹配*/

/*对象解构*/

let obj = {
    name: 'as',
    age: 10,
    height: 123,
    weight: 56,
}
/*对象的结构需要变量的名称与对象的属性是一致的*/
let {a, b} = obj;
console.log(a, b);
let {name, height} = obj;
console.log(name, height);

/*完全解构*/
let {name, age, height, weight} = {
    name: 'as',
    age: 10,
    height: 123,
    weight: 56,
}
console.log(name, age, height, weight);
/*不完全解构*/
let {names} = {
    names: 'as',
    ages: 10,
    heights: 123,
    weights: 56,
}
console.log(names);
let {namea} = {
    namez: 'as',
}
console.log(namea);

/*简化属性名/属性重命名*/
let{myProductName:mPN}={
    myProductName:'asa',
}
console.log(mPN);
console.log(myProductName);
let {name: n, age: a, height: h, weight: w} = {
    name: 'as',
    age: 10,
    height: 123,
    weight: 56,
}
console.log(n, a, h, w);
