////////////////////////////////////////////////////////////////////////////////

// some links: https://javascript.info/map-set

///////////////////////////////////////////////////////////////////////////////

/**
 * Map
 *
 * const map = new Map([['key', 'value']])
 *
 * map.set(key, value).set(key, value) 链式写法
 *
 * map.get(key)
 *
 * map.has(key)
 *
 * map.delete(key)
 *
 * map.clear()
 *
 * map.size
 *
 */
const mapList = new Map([
  ['name', 'Lantz'],
  ['gender', 'male'],
  ['email', 'lantzshaw@163.com'],
])

console.log('------------values------------', mapList.keys())
console.log('------------values------------', mapList.values())

console.time('time')

for (let item of mapList.keys()) {
  console.log('------------key------------', item)
}

console.timeEnd('time')

console.log('----------index------------', mapList.keys()[0]) // undefined

for (let item of mapList.values()) {
  console.log('------------value------------', item)
}

console.log(mapList.get('name'))

console.log('---------------mapList---------------', mapList)

const person = {
  name: 'Lantz',
  gender: 'male',
  age: 18,
}

// 将对象转成二维数组
// -> [ [ 'name', 'Lantz' ], [ 'gender', 'male' ], [ 'age', 18 ] ]
console.log('person', Object.entries(person))

const personMap = new Map(Object.entries(person))

console.log('personMap', personMap)

const price = [
  ['banana', '2'],
  ['orange', '3'],
  ['meat', '4'],
]

// fromEntries -> 将二维数组转成普通对象
console.log('price', Object.fromEntries(price))

/**
 * Set
 *
 * NOTE: set 没有get() 方法
 *
 * const set = new Set([value])
 *
 * set.add(value)
 *
 * set.delete(value)
 *
 * set.has(value)
 *
 * set.clear()
 *
 * set.size
 */

const set = new Set()

set.add(12)

set.delete(12)

set.has(12)

set.clear()

set.size

// 数组去重
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 1, 2]
const tempArr = [...new Set(arr)]

// let set = new Set(["oranges", "apples", "bananas"]);
// for (let value of set) alert(value);

// the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

for (const item of set.keys()) {
  console.log(item)
}

for (const item of set.values()) {
  console.log(item)
}

for (const [key, value] of set.entries()) {
  console.log(key, value)
}
