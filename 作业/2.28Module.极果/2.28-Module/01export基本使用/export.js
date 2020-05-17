// export用于导出变量和函数
//1.1导出变量 方式1
// export let name = "zhangsan";
// export let age = 19


//1.2导出变量 方式二
let name = "zhangsan";
let age = 20;
export{name,age}

let obj = {
	name:'lisi',
	age:30
}
export{obj}

//2.1导出函数 方式二
export function addFn(a,b){
	console.log(a+b);
}

//2.2导出函数 方式二
function fn1(){
	console.log('fn1')
}
function fn2(){
	console.log('fn2')
}
export {fn1 as tempfn1,fn2 as tempfn2}