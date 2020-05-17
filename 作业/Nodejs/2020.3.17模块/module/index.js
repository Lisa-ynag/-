let mymodule = require('./mymodule.js');
console.log(mymodule.a,mymodule.str);
mymodule.fn();
mymodule.fn2('你好呀！');

let person = require('./person.js');
let p = new person('lisi',20);
console.log(p)