//1.默认输出
// export default function(){
// 	console.log('temp')
// }

//一个模块中只能有一个export default
//也可以导出 class
export default class Person{
	constructor(name) {
	    this.name = name;
	}
}