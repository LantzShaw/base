// -> true
console.log(null == undefined)
// -> false
console.log(null === undefined)
// -> false
console.log(NaN === NaN)
// -> false
console.log(NaN == NaN)
// -> false
console.log(Boolean(NaN))
// -> false
console.log(Boolean(null))
// -> false
console.log(Boolean(undefined))
// -> false
console.log(Boolean(''))
// -> false
console.log(Boolean(0))
// -> true
console.log(0 == false)
// -> false
console.log(0 === false)

const foo = ''

if (foo) {
  console.log('enpty')
}

const baz = 0

if (baz) {
  console.log('')
}
