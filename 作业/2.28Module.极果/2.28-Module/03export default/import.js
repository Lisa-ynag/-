//1.匿名加载
// import myfn from './export.js'
// myfn()

/* 结论:正常输出,导入时要加{} 
		默认输出,导入时不要加{} [export default]
*/

//导入class
import Person from './export.js'
let p = new Person('zhangsan')
console.log(p)