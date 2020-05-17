let a = 10;
let str = 'strrr';
exports.a = a;
exports.str = str;

function fn(){
	console.log('无参')
}
function fn2(temp){
	console.log('有参')
}
exports.fn = fn;
exports.fn2 = fn2;