let obj = new Object();
obj.name = 'gy';
obj.age = 12;
obj.say = () =>void console.log("你好");
console.log(obj);

//一次只能一个
let obj_1={
    name:'gy',
    age:12,
    say:() =>void console.log("你好"),
}
console.log(obj_1);

let name = 'geyang', age = 23;
//一般
let obj_2 = {
    name: name,
    age: age,
    say: function(){
        console.log("你好")
    },
}
console.log(obj_2);
//当对象属性名与值的变量名一致时可以省略变量名，速写属性
//速写属性
let obj_3 = {
    name,
    age,
    say: function(){
        console.log("你好")
    },
}
console.log(obj_3);
//速写方法
let obj_4 = {
    name,
    age,
    say(){
        console.log("你好")
    },
}
console.log(obj_4);

let cname='Kitty',cage=20,ccolor='white';
let cat={
    cname,
    cage,
    ccolor,
    catHello(){
        console.log(`你好我是${cage}岁的${ccolor}猫${cname}`);
    },
    setFrom(val){
        console.log(`我来自${val}`);
    }
}
cat.catHello();
cat.setFrom('china');

//实现一个函数完成，接收两个参数，将参数分装成对象返回
//一般写法
let fn_1=function (v1,v2) {
    return {
        v1:v1,
        v2:v2,
    }
}
//箭头函数
console.log(fn_1(1,2));
let fn_2=(v1,v2)=>({
        v1:v1,
        v2:v2,
    })
console.log(fn_2(1,2));
//速写属性
let fn_3=(v1,v2)=>({
    v1,
    v2,
})
console.log(fn_3(1,2));

