//逐一加载方式
// import {fn1,fn2} from './export.js'
// console.log('fn1',fn1(5))
// console.log('fn2',fn2(5))

//整体加载方式
import * as obj from './export.js'
console.log(obj)
console.log('fn1',obj.fn1(10))
console.log('fn2',obj.fn2(10))
