// 如果 ?? 前面的值为 null 或者 undefined 则返回 后面的值 否则返回前面的值
const foo = false ?? 0

console.log(foo)

const a = { duration: 50 }

a.duration ??= 10
console.log(a.duration)

a.speed ??= 25
console.log(a.speed)

// 如果 dog 访问的 name 为 null 或者 undefined 则返回 undefined
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
}

const dogName = adventurer.dog?.name

console.log(adventurer.someNonExistentMethod?.())

function* boo() {
  yield 2
}

const booIterator = boo()

// console.log(booIterator.next())

function* baz() {
  yield* boo() // 不加 * 返回的是 Generator 调用另一个函数时会加 *
  yield 3
}

const bazIterator = baz()

console.log(bazIterator.next())
console.log(bazIterator.next())
console.log(bazIterator.next())
