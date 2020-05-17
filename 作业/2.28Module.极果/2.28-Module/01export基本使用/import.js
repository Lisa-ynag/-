
//import 用于导入其他模块
//1.1导入
// import {name,age} from './export.js'
// console.log(`你好，我叫${name},今年${age}`);


//1.2可以对变量取别名
import{name as myName,age}from './export.js'
console.log(`你好，我叫${myName},今年${age}`);

//1.3导入的变量都是只读的,不能够被修改
//age = 50//会报错
//1.4导入的对象属性是可以修改的
import {obj} from './export.js'
obj.age = 50;
console.log(obj)

//2.1导入函数
add(10,20);//存在变量提升的效果
import {addFn as add} from './export.js'

//2.2导入函数
import{tempfn1,tempfn2} from './export.js'
tempfn1();
tempfn2();

//module是静态导入
/* 
不能使用表达式和变量那行运行是才能看到结果的代码

报错1
 */
// let path = "./export.js";
// import {tempfn3} from path

//报错2
// if(1=1){
// 	import {addFn as test1} from './export.js'
// }