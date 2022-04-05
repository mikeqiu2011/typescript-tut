// generics

// by extends obj, the string passed in no longer works
const addUID = <T extends { name: string }>(obj: T) => { // it capture whatever we pass into the function
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: 'mike', age: 30 })
console.log(docOne.age); // now we can access the name property of the obj

// let docTwo = addUID({ age: 10 }) // this is allowed for generic though it does not make sense
// console.log(docTwo);


// ENUMS
// when log to console, the name will be in 0-5 as the array index
enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, PERSON, FOOD
}

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docThree: Resource<object> = { // now is okay
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: 'mike' }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: ResourceType.FOOD,
    data: ['bread', 'milk']
}

console.log(docFour);


// tuples

let arr = ['mike', 2, true]
arr[0] = 1 //this is allowed

let tup: [string, number, boolean] = ['mike', 30, true]
tup[0] = 1 // not allowed
tup[0] = "kevin" // okay


