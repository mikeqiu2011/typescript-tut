"use strict";
let greet;
// optional argument/ default value arg shall be put at last
const add = (a, b, c = 0) => {
    return a + b + c;
};
const result = add(5, 10, 20);
console.log(result);
// result = 'mike' // not allow
