var char = 'mike';
var age = 30;
// age = 'kevin' // you cannot do this
age = 40; // you can do this
var circ = function (diameter) {  // not affect JS, the type checking is only during compile time
    return diameter * Math.PI;
};
console.log(circ(1)); // now this will not compile
