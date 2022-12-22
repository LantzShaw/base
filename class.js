class Person {
  constructor(name = 'Default Name', age) {
    this.name = name
    this.age = age
    this.gender = 'male'
  }

  getName() {
    return this.name
  }
}

class Writter extends Person {
  // 方式一:
  //   constructor(name, age) {
  //     super(name, age)

  //     this.hobbies = 'play games'
  //   }

  // 方式二:
  constructor(...args) {
    super(...args)

    this.hobbies = 'play games'
  }
}

class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`
  }
}

try {
  throw new ValidationError('Not a valid phone number')
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name) // This is Error instead of ValidationError!
    console.log(error.printCustomerMessage())
  } else {
    console.log('Unknown error', error)
    throw error
  }
}
