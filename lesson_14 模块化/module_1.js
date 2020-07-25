//批量导入,导入内容与导出内容一致同名
//import {Student,User} from './module_2.js'
//将模块重命名为m2并导入全部内容
import * as m2 from './module_2.js'
//将默认导出导入
import fn from './module_2.js'

//导出
export let arr = ['11', '12'];

//导出
export let fun = function () {
    console.log("你好呀");
}

//导出
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

/*let student = new Student('葛杨', 12);
student.info();*/

let student = new m2.Student('葛杨', 12);
student.info();

/*fn();
m2.default();*/

console.log(fn)
console.log(m2.default)
