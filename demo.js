/**
 * sum the array items
 *
 * @param {Array} arr
 * @returns Number
 */
function sumNum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
}

console.log(sumNum([20, 1, 38, 98, 13, 77])) // -> 247

/**
 * format the number
 *
 * @param {Number} n
 * @returns String
 */
function formatNum(n) {
  // 会将空字符串、null设置为0
  // if (Number(n).toString() === 'NaN') {
  //   console.error('Your paramer "n" is number value!')

  //   return
  // }

  // 会将空字符串、null设置为0
  // isNaN() 判断是否是非数字值
  // if (isNaN(n)) {
  //   console.error('Your paramer "n" is number value!')

  //   return
  // }

  // parseFloat
  // NOTE: 这种方式接受字符串数字、数字 其它空串、null、'abac' 都不能
  // if (parseFloat(n).toString() === 'NaN') {
  //   console.error('Your paramer "n" is number value!')
  //   return
  // }

  // 这种方式接受字符串数字、数字 其它空串、null、'abac' 都不能
  // let reg = /^[0-9]+?.[0-9]*/

  // if (!reg.test(n)) {
  //   console.error('Your paramer "n" is number value!')

  //   return
  // }

  // 只支持number类型数字 不接受数字字符串等其它类型
  if (typeof n !== 'number') {
    console.error('Your paramer "n" is number value!')
    return
  }

  return Number(n).toLocaleString().split(',').join('_')
}

console.log(formatNum(731928392)) // -> 731_928_392
console.log(formatNum(-7392)) // -> 731_928_392
console.log(formatNum('339294020')) // -> 339_294_020
console.log(formatNum('abc34892')) // -> undefined
console.log(formatNum('')) // -> 0
console.log(formatNum(null)) // -> 0

/**
 * generate array of different numbers and sort the array by decreasing
 *
 * @returns Array
 */
const generateRandomArray = () => {
  // 随机生成1000000个1-100000000以内的整数
  const tempArr = Array.from({ length: 1000000 }, () => Math.round(Math.random() * 100000000))

  // 从大到小排序
  const sortableArr = tempArr.sort((a, b) => b - a)

  // 数组去重
  return [...new Set(sortableArr)]
}

// console.log(generateRandomArray()) // -> [...]
