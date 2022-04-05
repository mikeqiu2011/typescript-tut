let names = ['mike', 'kevin', 'frank'] // types cannot change after declare

names.push('eric') // fine
// names.push(1) // will not compile
// names[0] = 1 // not compile either

let mixed = ['mike', 1, 'kevin', 2, true] // declare is fine

// all work
mixed.push('eric')
mixed.push(4)
mixed[0] = 0

console.log(mixed);

