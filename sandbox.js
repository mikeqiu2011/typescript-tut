var ninja = {
    name: 'mike',
    age: 30,
    belt: 'black'
};
// ninja.name = 1 // not compile
ninja.name = 'kevin';
ninja = {
    name: 'kevin',
    age: 30,
    belt: 'black'
};
// this not
// ninja = { 
//     name: 'kevin',
//     age: 30,
//     belt2: 'black',
//     address: 'shanghai'
// }
