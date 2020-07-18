/*es5中产生对象
工厂函数，构造函数*/
function Person(name,age) {
    this.name=name;
    this.age=age;
}
Person.prototype.say=function(){
    console.log(`${this.name}进行自我介绍`);
}
//实例化对象
let person_1=new Person('GE',12);
person_1.say();
console.log(person_1);
let person_2=new Person('yang',22);
person_2.say();
console.log(person_2);

/*ES6使用class定义对象(类)
* 默认会有一个无参构造方法*/
class People{
    //构造器构造方法
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log(`进行了有参构造`);
    }
    //普通方法
    say(){
        console.log(`${this.name}进行自我介绍`);
    }
}
let p_1=new People();
console.log(p_1);
let p_2=new People('qw',100);
console.log(p_2);
p_2.say();

//类的定义
class Cat{}
let cat =new Cat();
console.log(cat);
let Dog=class Main {
    constructor(){}
}
let dog =new Dog();
console.log(dog);

//注意事项
/*Es5构造函数存在变量的提升，而class不存在变量的提升*/
let t_1=new T();
console.log(t_1);
function T() {
}
let t_2=new T();
console.log(t_2);

let s_1=new S();
console.log(s_1);
class S{
    constructor(){}
}
let s_2=new S();
console.log(s_2);

//静态属性方法
class Tree{
    constructor(height,weight,age){
        this.height=height;
        this.weight=weight;
        this.age=age;
    }
    say(){//普通方法实例化使用
        console.log('qwe');
    }
    static product(){//静态方法有类对象直接使用
        console.log('光合作用');
    }
}
Tree.goods='ssss';
Tree.product();
//Tree.say();
let tree=new Tree();
//tree.product();
tree.say();

/*getter/setter*/
class Persons {
    constructor(name, id,age) {
        this.name = name;
        this.id = id;
        this.age=age;
    }
    say() {
        console.log(`你好，我叫${this.name}`);
    }
    //setter设置器
    setAge(age) {
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}

let pp = new Persons('林给', '123',20);
console.log(pp);
pp.setAge(39);
console.log(pp);
console.log(pp.getAge())
