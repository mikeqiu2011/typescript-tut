let age: any = 30 // reverse ts to js, no benifit of TS

// all work
age = 25
age = "25"
age = []
age = true
age = {
    name: 'mike',
    age: 10
}

let mixed: any[] = []
mixed.push('mike')
mixed.push(1)

let ninja: { name: any, age: any }

ninja = {
    name: 'mike',
    age: 10
}
ninja = {  // it is felxible but again no benifit of typescript
    name: 10,
    age: 'mike'
}
