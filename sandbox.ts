// explicit types, when the value cannot be determined initially
let char: string
let age: number
let isLoggedIn: boolean

char = "mike"
// char = 1 // not compile

// below is not allowed
// let ninjas: string[]
// ninjas.push('mike')

// below is fine
let ninjas: string[] = []
ninjas.push('mike')

//union type of mixed array
let mixed: (string | number | boolean)[] = []
mixed.push(20)
mixed.push('hello')
mixed.push(false)

let uid: string | number;
uid = 1
uid = '1'

//obj
let ninjaOne: object;
ninjaOne = { name: 'mike', age: 30 }
ninjaOne = { name: 'mike', age: 30, belt: 'black' } // work
// ninjaOne = 'mike' //not work

// explicit obj typing
let ningjaTwo: {
    name: string,
    age: number,
    belt: string
}

// ningjaTwo = { name: 'mike', age: 30 } // not working
ningjaTwo = { name: 'mike', age: 30, belt: 'black' } // work

