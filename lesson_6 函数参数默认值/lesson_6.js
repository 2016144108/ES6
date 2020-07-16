/*ES6支持为函数参数设置默认值*/
//存在问题
function add_1(a, b) {
    console.log(a + b);
}
add_1(1, 2);
add_1(1);
add_1();

//一般写法
function add_2(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0
    }
    console.log(a + b);
}
add_2(1, 2);
add_2(1);
add_2();

//逻辑运算符设计
function add_3(a, b) {
    a = a || 0;
    b = b || 0;
    console.log(a + b);
}
add_3(1, 2);
add_3(1);
add_3();

//函数默认值
function add_4(a = 0, b = 0) {
    console.log(a + b);
}
add_4(1, 2);
add_4(1);
add_4();

//解构的方式
function add_5([a = 0, b = 0] = [0, 0]) {
    console.log(a + b);
}
add_5([1, 2]);
add_5([1]);
add_5();
