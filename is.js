/**
 * 判断是否是对象
 */

function isObject(val) {}

let obj = {}
let arr = []
let num = 0

// 方式一
console.log(Object.prototype.toString.call === '[object Object]')

// 方式二
console.log(obj.constructor === Object)

// 方式三 instanceof 不太准确、不严谨
console.log(obj instanceof Object) // true
console.log(arr instanceof Object) // true
// 好像不能这么用
console.log(num instanceof Number) // true

// 方式四 typeof
typeof obj === 'object'

// typeof undefined === 'undefined'
// typeof null === 'object'
// typeof true === 'boolean'
// typeof 123 === 'number'
// typeof 'abc' === 'string'
// typeof function () { } === 'function'
// typeof {} === 'object'
// typeof [] === 'object'

/**
 * 是否是数字
 */

//  isNaN(val)不能判断空串或一个空格
//  如果是一个空串、空格或null，而isNaN是做为数字0进行处理的

// 正则

function isNumber(val) {}
