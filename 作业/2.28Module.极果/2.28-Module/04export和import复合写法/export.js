/* 
1.导入public.js的number1变量
2.继续导出 给 import.js使用
 */

//复合写法
export{number1}from './public.js'

//可以理解为以下写法
/* import{number1} from './public.js'
export{number1} */