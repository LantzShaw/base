/**
 * NOTE: generate arrays
 */

// new Array(6).fill(0)
// Array.from({length: 3}, () => 0)
// [...new Array(3).keys()] [0, 1, 2]
// Array.from({length: 3}, (x, i) => i) [0, 1, 2]
// Array.from({length: END - START}, (x, i) => i  + START)

// const arr = new Array(10).fill(0)
// const arr = Array.from({ length: 10 }, () => 0)
// const arr = Array.from({ length: 10 }, (x, i) => i)

// console.log(arr)

/**
 * NOTE: 数组去重
 *
 *
 * reduce基本使用参考链接:
 * https://blog.csdn.net/weixin_51040174/article/details/124589120
 * https://blog.csdn.net/qq_40677590/article/details/108471813
 */

const arr = [0, 1, 2, 0, 2]

/**************普通数组************* */

// 使用 es6 的 new Set()去重
const tempArray = [...new Set(arr)]

// 使用reduce 去重
const newArr = arr.reduce((acc, curr, index, arr) => {
  console.log('curr', curr, acc.indexOf(curr))

  acc.indexOf(curr) === -1 && acc.push(curr)

  return acc
}, [])

console.log('--------------tempArray and newArr--------------', tempArray, newArr)

/**
 * NOTE: 二维数组转一维数组
 */
const amount = [[12, 2, 3], [3, 3, 5], 3, 32]

const newAmount = amount.reduce((acc, curr) => {
  // TODO: 这个地方不能用展开操作符
  return acc.concat(curr)
})

console.log('-------------new amount------------', newAmount)

/**
 * NOTE: 数组求和
 *
 * arr.reduce((accumulator,currentValue,currentIndex,array)=>{
 * ...
 * }, initialValue);
 * accumulator 表示上一次调用回调时的返回值，或者初始值 init;
 * currentValue 表示当前正在处理的数组元素；
 * currentIndex 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；不常用
 * array 表示原数组；不常用
 * initialValue 表示初始值。
 */

const numbers = [1, 2, 3, 4]

const obj = [
  {
    value: 0,
  },
  {
    value: 2,
  },
  {
    value: 4,
  },
]

// const total = numbers.reduce((sum, i) => sum + i, 0)
// const total = numbers.reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue, 0)
// const total = numbers.reduce((acc, currentValue) => acc + currentValue, 0)
const total = numbers.reduce((acc, curr) => {
  console.log('acc', acc, curr)

  return acc + curr
}, 0)

console.log('--------------total--------------', total)

const sum = obj.reduce((acc, curr, index) => {
  console.log('acc', acc, curr, index)
  return acc
})

console.log('--------------sum--------------', sum)

// TODO: [key, value] 这个写法
// parsed.dependencies = Object.entries(parsed.dependencies).reduce((acc, [key, value]) => {
//   if (value.startsWith('workspace:')) {
//     acc[key] = 'latest'
//   } else {
//     acc[key] = value
//   }
//   return acc
// }, {})
