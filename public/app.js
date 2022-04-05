"use strict";
// generics
// by extends obj, the string passed in no longer works
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'mike', age: 30 });
console.log(docOne.age); // now we can access the name property of the obj
let docTwo = addUID({ age: 10 }); // this is allowed for generic though it does not make sense
console.log(docTwo);
