"use strict";
// generics
// by extends obj, the string passed in no longer works
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'mike', age: 30 });
console.log(docOne.age); // now we can access the name property of the obj
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: 'mike' }
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ['bread', 'milk']
};
console.log(docFour);
