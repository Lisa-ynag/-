/* let events = require('events');
//创建一个事件对象
let eventEmitters = new events.EventEmitter();
//添加一个自定义事件 addListener(),on();
eventEmitters.addListener('test',function(){
	console.log('test fn');
})
//触发事件
eventEmitters.emit('test'); */

/* ***********示例1 */
//监控随机数的变化，当值大于90时，触发自定义事件。
/* let events = require('events');
//创建一个事件对象
let eventEmitters = new events.EventEmitter();
let timer = setInterval(function(){
	let random = parseInt(Math.random()*100);
	console.log('随机数：',random);
	if(random>80){
		console.log('大于80了');
		eventEmitters.emit('random');
	}
},1000)
eventEmitters.on('random',function(){
	//终止程序
	console.log('终止程序');
	clearInterval(timer);
	
})
console.log('监听个数：',eventEmitters.listenerCount('random')) */

/*              示例2监听个数								 */
/* let events = require('events');
//创建一个事件对象
let eventEmitters = new events.EventEmitter();
//默认显示10个，如果超出会有警告提示
eventEmitters.setMaxListeners(10);

eventEmitters.addListener('fn',function(){
	console.log('1')
})
eventEmitters.addListener('fn',function(){
	console.log('2')
})
eventEmitters.addListener('fn',function(){
	console.log('3')
})
eventEmitters.addListener('fn',function(){
	console.log('4')
})
eventEmitters.addListener('fn',function(){
	console.log('5')
})

eventEmitters.addListener('fn',function(){
	console.log('6')
})
eventEmitters.addListener('fn',function(){
	console.log('7')
})
eventEmitters.addListener('fn',function(){
	console.log('8')
})
eventEmitters.addListener('fn',function(){
	console.log('9')
})
eventEmitters.addListener('fn',function(){
	console.log('10')
})
// eventEmitters.addListener('fn',function(){
// 	console.log('11')
// })
console.log('监听个数：',eventEmitters.listenerCount('fn')) */

/* _____________移除监听个数———————————————————— */
/* let events = require('events');
//创建一个事件对象
let eventEmitters = new events.EventEmitter();
function fn1(){
	console.log('fn1');
}
function fn2(){
	console.log('fn2');
}
eventEmitters.addListener('test',fn1);
eventEmitters.addListener('test',fn2);
eventEmitters.emit('test');
console.log('移除前的监听个数：',eventEmitters.listenerCount('test'));
//eventEmitters.removeListener('test',fn1);
eventEmitters.removeAllListeners('test');
console.log('移除后的监听个数：',eventEmitters.listenerCount('test')); */

/* ________自定义事件监听 BaseEmitter  addEvent('',fn); emitEvent('') _________*/
/* let events = require('events');
//引用实用工具类 util
let util = require('util');
//自定义类
function BaseEmitter(){
	this.emitter = new events.EventEmitter();
}
//让BaseEmitter 继承events.EventEmitter对象，拥有对应功能
util.inherits(BaseEmitter,events.EventEmitter);
//在原型中增加函数
BaseEmitter.prototype.addEvent= function(eventName,fn){
	//调用对象方法
	this.emitter.addListener(eventName,fn);
}
//分发
BaseEmitter.prototype.emitEvent = function(eventName,arg){
	//调用方法
	this.emitter.emit(eventName,arg);
}

let base = new BaseEmitter();
base.addEvent('test',function(temp){
	console.log('test...',temp);
})
base.emitEvent('test','temp123'); */

/* __________ES6__________ */
let events = require('events');

class BaseEmitter extends events{
	//添加事件
	addEvent(eventName,fn){
		this.addListener(eventName,fn)
	}
	//分发事件
	emitEvent(eventName,arg){
		this.emit(eventName,arg);
	}
}
let base = new BaseEmitter();
base.addEvent('test',function(temp){
	console.log('test...',temp);
})xpress();
var bodyPars
base.emitEvent('test','temp123');