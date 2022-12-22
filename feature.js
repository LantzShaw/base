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

console.log(booIterator.next())

function* baz() {
  yield 3
  yield* boo()
}

const bazIterator = baz()

console.log(bazIterator.next())
console.log(bazIterator.next())
console.log(bazIterator.next())
