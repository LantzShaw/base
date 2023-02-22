/**
 * 参考资料:
 * https://juejin.cn/post/7052949415350239246
 */

type Person = {
  name: string
  gender: string
  age: number
  // [propname: string]: string // 字符串索引签名
}

// 不会显示 never类型
type Foo = 'add' | number | string | never

/**
 * 高级类型
 */

// NOTE: pick 从类型对象中 挑选几个类型 组成一个新的类型
type NewPerson = Pick<Person, 'name' | 'gender'>

type TempPick<T, K extends keyof T> = { [S in K]: T[S] }

// NOTE: 联合类型与联合类型比较 好像会自动遍历
// Exclude 删除类型集合中的指定类型 联合类型 -> 返回一个联合类型
type Doctor = Exclude<keyof Person, 'name' | 'a' | 3 | never | 'age'>

/**
 * 参考文章:
 * https://juejin.cn/post/6998736350841143326
 * extends 除了接口继承外 还可用来条件判断 当然还有其它作用
 *
 * 如果extends前面的类型能够赋值给extends后面的类型，那么表达式判断为真，否则为假。
 */
// NOTE: Exclude 实现
// 满足T的接口一定可以满足U，所以条件为真   T 和 U 都要是联合类型
// TODO: 这个地方不太好理解
type TempExclude<T, U> = T extends U ? never : T

// type doctor = Pick<Person, Exclude<keyof Person, 'name'>>

// 删除 key 为 name 和 gender 的集合, 然后返回一个新的类型
type doctor = Omit<Person, 'name' | 'gender'>

// NOTE: Omit 实现
type TempOmit<T, k extends keyof T> = Pick<T, Exclude<keyof T, k>>

// Partial 可以快速把某个接口类型中定义的属性变成可选的(Optional)
type Chinese = Partial<Person>

// NOTE: Partial 实现
type TempPartial<T> = {
  [P in keyof T]?: T[P]
}

// Readonly 只读类型
type ReadonlyPerson = Readonly<Person>

// NOTE: Readonly 实现
type TempReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// ReturnType 用于获取函数 T 的返回类型
type A0 = ReturnType<() => string> // string
type A1 = ReturnType<(s: string) => void> // void
type A2 = ReturnType<() => T> // {}
type A3 = ReturnType<() => T> // number[]
// type A4 = ReturnType // any
// type A5 = ReturnType // any
// type A6 = ReturnType // Error
// type A7 = ReturnType // Error

// NOTE: ReturnType 实现
type tempReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// 只读的
// Type '"hello"'
let x = 'hello' as const
// Type 'readonly [10, 20]'
let y = [10, 20] as const
// Type '{ readonly text: "hello" }'
let z = { text: 'hello' } as const

const Arr = ['name', 'age', 'location', 'email'] as const
type A = typeof Arr[number]

type arr = ('name' | 'age' | 'location' | 'email')[]

type UnionType<T> = T extends (infer P)[] ? P : never

type arrType = UnionType<arr>

//
type T = boolean | string | string[] | (() => void) | {} | { x: number }

type MyNumber = number | bigint

type T1 = {
  [key: number]: number
}

type T2 = {
  [key: string]: number
}

type T3 = T1 | T2

// 这里 T0、T1 分别具有数字索引签名和字符串索引签名，因此结果类型不具有索引签名，使用索引访问结果类型属性时会报错。
// T3[0]
// T3['a']
