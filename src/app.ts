// generics

// by extends obj, the string passed in no longer works
const addUID = <T extends object>(obj: T) => { // it capture whatever we pass into the function
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: 'mike', age: 30 })
console.log(docOne.age); // now we can access the name property of the obj

let docTwo = addUID('mike') // this is allowed for generic though it does not make sense
console.log(docTwo);


