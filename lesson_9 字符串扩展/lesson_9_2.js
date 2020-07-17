//模板字符串`123`
let obj={
    name:'gy',
    age:23,
}
//普通字符串
let str_1="我叫"+obj.name+",今年"+obj.age+"岁";
console.log(str_1);
//模板字符串当普通字符串使用
let str_2=`我叫`+obj.name+`,今年`+obj.age+`岁`;
console.log(str_2);
//模板字符串${}使用
let str_3=`我叫${obj.name},今年${obj.age}岁`;
console.log(str_3);
//支持换行
`im coming
go`
let sql="insert into user (name,age) values('"+obj.name+"','"+obj.age+"')";
console.log(sql);
let sql1=`insert into user (name,age) values('${obj.name}','${obj.age}')`;
console.log(sql1);

let re=x=>x;
let x=90;
let result=`输入数据${x},输出结果${re(x)}`;
console.log(result);
