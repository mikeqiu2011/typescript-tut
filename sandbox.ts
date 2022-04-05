let char = 'mike'
let age = 30

// age = 'kevin' // you cannot do this
age = 40 // you can do this

const circ = (diameter: number) => { // strict type
    return diameter * Math.PI
}

console.log(circ(1)); // now this will not compile
