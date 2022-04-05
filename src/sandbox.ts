let greet: Function;

// optional argument/ default value arg shall be put at last
const add = (a: number, b: number, c: number = 0): number => {
    return a + b + c
}

const result = add(5, 10, 20)

console.log(result);

// result = 'mike' // not allow
