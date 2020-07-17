let str = 'asbcdefg';
//for循环遍历
for (let i = 0; i < str.length; i++) {
    console.log(i, str[i]);//i是索引
}
//for..in遍历
for (let i in str) {
    console.log(i, str[i]);//i是索引
}
//for..of遍历
for (let i of str) {
    console.log(i);//i是字符串数据
}

for(let i of '你好，全世界'){
    console.log(i);
}

/*扩充方法*/
/*indexOf()//子字符串第一次出现的位置，没有返回-1,返回位置信息*/
let str_1 = '你好嘢，全世界';
if (str_1.indexOf('全世界') === -1) {
    console.log('不存在');
} else {
    console.log('存在,在' + str_1.indexOf('全世界'));
}
if (str_1.indexOf('as') === -1) {
    console.log('不存在');
} else {
    console.log('存在,在' + str_1.indexOf('as'));
}

/*includes()//字符串中是否存在子字符串返回true||false*/
if (str_1.includes('全世界')) {
    console.log('存在,在' + str_1.includes('全世界'));
} else {
    console.log('不存在');
}

/*startsWith()//字符串是否以某字符串开始返回true||false
endsWith()//字符串中是否存以某字符串结束返回true||false*/
console.log(str_1.startsWith('你好'));
console.log(str_1.startsWith('nihao'));
console.log(str_1.endsWith('世界'));
console.log(str_1.endsWith('nihao'));

/*repeat()重复几次指定字符串*/
console.log(str_1.repeat(1));
console.log(str_1.repeat(5));

/*padStart()开头叠加内容，补足制定长度
padEnd()末尾叠加内容，补足制定长度*/
console.log('a'.padStart(5, 'as'));
console.log('a'.padStart(5, 'asd'));
console.log('a'.padEnd(5, 'as'));
console.log('a'.padEnd(5, 'asd'));

let fun = ([year, month, day, hour, minute, second]) => {
    year = year.padStart(4, '0');
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    hour = hour.padStart(2, '0');
    minute = minute.padStart(2, '0');
    second = second.padStart(2, '0');
    console.log(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
fun(['2020', '12', '12', '21', '21', '21']);
fun(['2020', '1', '1', '3', '4', '6']);
