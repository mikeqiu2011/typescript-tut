"use strict";
// generics
// by extends obj, the string passed in no longer works
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'mike', age: 30 });
console.log(docOne.age); // now we can access the name property of the obj
// let docTwo = addUID({ age: 10 }) // this is allowed for generic though it does not make sense
// console.log(docTwo);
// ENUMS
// when log to console, the name will be in 0-5 as the array index
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["FOOD"] = 5] = "FOOD";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceType.PERSON,
    data: { name: 'mike' }
};
const docFour = {
    uid: 2,
    resourceName: ResourceType.FOOD,
    data: ['bread', 'milk']
};
console.log(docFour);
