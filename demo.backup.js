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

console.log(sumNum([20, 1, 38, 98, 13, 77]))

/**
 * format the number
 *
 * @param {Number} n
 * @returns String
 */
function formatNum(n) {
  // console.log(typeof Number(n), Number(n) === NaN) // -> number false

  if (Number(n).toString() === 'NaN') {
    console.error('Your paramer "n" is number value!')

    return
  }

  return Number(n).toLocaleString().split(',').join('_')
}

console.log(formatNum(731928392)) // -> 731_928_392
console.log(formatNum('339294020')) // -> 339_294_020
console.log(formatNum('abc34892')) // -> undefined

/**
 * generate array of different numbers and sort the array by decreasing
 *
 * @returns Array
 */
const generateRandomArray = () => {
  // TODO: 生成相同的值
  // const tempArr = new Array(10).fill(Math.round(Math.random() * 100))
  // 随机生成1000000个1-100000000以内的整数
  const tempArr = Array.from({ length: 1000000 }, () => Math.round(Math.random() * 100000000))

  // 从大到小排序
  const sortableArray = tempArr.sort((a, b) => b - a)

  // 数组去重
  return [...new Set(sortableArray)]
}

console.log(generateRandomArray())
