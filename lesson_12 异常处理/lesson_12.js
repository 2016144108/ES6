
let message='';
try{//可能出现问题的代码块
    //fu();
    message='没有出现问题';
}catch (e) {//捕获异常
    console.log(e);
    console.log(e.message);
    message='出现问题:'+e.message;
}finally {//一定会执行，不论出没出错
    console.log(message);
}

