//用函数实现数据求和
//arguments方法
function add() {//arguments是一个伪数组不能用foreach遍历
    let resp = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        resp += arguments[i];
    }
    console.log(resp);
}
add(1, 2);
add(2, 3, 4, 5);
add(3, 4, 5, 6, 7, 8);


//rest参数
//ES6引入rest参数(形如...values,这里的values是数组)，用于获取函数剩余的多个参数
function add2(...values) {//arguments是一个伪数组不能用foreach遍历
    let resp = 0;
    console.log(values);
    values.forEach(function (item) {
        resp+=item;
    })
    /*for (let val of values) {
        resp += val;
    }*/
    console.log(resp);
}
add2(1, 2);
add2(2, 3, 4, 5);
add2(3, 4, 5, 6, 7, 8);
