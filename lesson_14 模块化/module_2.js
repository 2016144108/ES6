//导出
export class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`姓名：${this.name},年龄：${this.age}`);
    }
}

//导出
export class User {
    constructor() {
    }

    say() {
        console.log('自我介绍一下');
    }
}

/*export {Student, User}//批量导出*/

//默认导出,只能有一个,可以默认导出一个对象
/*export default function() {
    console.log("default");
}*/
export default {
    constructor(){},
    say(){
        console.log('default');
    },
    byte(){
        console.log('空的');
    }
}
