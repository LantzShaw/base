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
 */

const arr = [0, 1, 2, 0, 2]

const tempArray = [...new Set(arr)]

console.log('--------------tempArray--------------', tempArray)
