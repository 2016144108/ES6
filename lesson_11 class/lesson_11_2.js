//类的继承

//ES5继承写法
/*
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.say=function(){
    console.log(`你好，我叫${this.name}`);
}

//继承
function Student(name,age,no) {
    //公有属性
    Person.call(this,name,age);
    //Person.apply(this,[name,age]);//二选一
    //私有属性
    this.no=no;
}

//继承父类方法
//1-方法1 for in 遍历；
/!*for(let i in Person.prototype){
    Student.prototype[i]=Person.prototype[i];
}*!/
//方法2
Student.prototype=new Person();

Student.prototype.test=function () {
    console.log(`${this.name}在考试中`);
}

let stu_1=new Student('geyang',12,'122333');
console.log(stu_1);
stu_1.test();
stu_1.say();
*/

/*ES6继承写法*/
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(`你好，我叫${this.name}`);
    }
}

class Student extends Person{
    constructor(name,age,no){
        /*this.name=name;
        this.age=age;*/
        super(name,age);
        this.no=no;
    }
    /*say(){
        console.log(`你好，我叫${this.name}`);
    }*/
    test() {
        console.log(`${this.name}在考试中`);
    }
}
let stu_2=new Student('geyang',12,'122333');
console.log(stu_2);
stu_2.test();
stu_2.say();

class Animal {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        console.log(`${this.name}正在吃东西`);
    }
    static sayage(){
        console.log(`动物`);
    }
}

class Cat extends Animal{
    constructor(name,age,style){
        super(name,age);
        this.style=style;
    }
    isStyle(){
        console.log(`${this.name}是只${this.style}`);
    }
}

class Dog extends Animal{
    constructor(name,age,style){
        super(name,age);
        this.style=style;
    }
    isStyle(){
        console.log(`${this.name}是只${this.style}`);
    }
}

let c =new Cat('kitty',20,'猫');
let d =new Dog('tody',23,'狗');
console.log(c);
c.isStyle();
c.eat();
Cat.sayage();
console.log(d);
d.isStyle();
d.eat();
Dog.sayage();
