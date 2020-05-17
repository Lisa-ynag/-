let _ = require("./node_modules/underscore");
//_表示一个全局变量，类似在JQ中我们使用$
//console.log(_)
//last
console.log(_.last(["zhangsan","lisi","wanwu246"]));
//first
console.log(_.first(["zhangsan","lisi","wanwu"]));

//Map
let newarr = _.map([1,2,3],num=>{
	return num*2;
})
console.log(newarr);

//size
let size = _.size([1,2,3,4,5]);
console.log(size);
//wrap
let hello = function(name) { return "hello: " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("moe") + ", after";
});
console.log(hello());

