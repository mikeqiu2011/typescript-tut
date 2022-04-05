// generics

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100)
    return { ...obj, uid }
}

let docOne = addUID({ name: 'mike', age: 30 })

console.log(docOne.name); // we cannot access the name property of the obj
