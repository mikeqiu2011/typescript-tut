let char = 'mike'
let age = 30

// age = 'kevin' // you cannot do this
age = 40 // you can do this

const circ = (diameter) => { // this not error but not stricting the type it takes
    return diameter * Math.PI
}

console.log(circ('hello')); // this will render NaN in run time
