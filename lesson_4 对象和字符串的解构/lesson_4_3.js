/*
函数参数解构也可以使用默认值*/

/*
function add(x, y) {
    console.log(x + y);
}

add(1, 2);

let arr = [1, 2];
add(arr);
let [a, b] = arr;
add(a, b);
/!*解构过程*!/
function add_1([x, y]) {
    console.log(x + y);
}
add_1(arr);
add(1, 2);
add(a, b);
*/

function fn({name, age}={}) {
    console.log(name,age);
}
fn();



