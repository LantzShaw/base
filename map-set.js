////////////////////////////////////////////////////////////////////////////////

// some lins: https://javascript.info/map-set

///////////////////////////////////////////////////////////////////////////////

/**
 * Map
 *
 * const map = new Map([['key', 'value']])
 *
 * map.set(key, value)
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

console.time()

for (let item of mapList.keys()) {
  console.log('------------key------------', item)
}

console.timeEnd()

console.log('----------index------------', mapList.keys()[0]) // undefined

for (let item of mapList.values()) {
  console.log('------------value------------', item)
}

console.log(mapList.get('name'))

console.log('---------------mapList---------------', mapList)

/**
 * Set
 *
 * const set = new Set([value])
 *
 * set.add(value)
 *
 * set.delete(value)
 *
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
