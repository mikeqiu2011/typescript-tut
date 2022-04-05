//normal ways to define type, but it is repetitive
const logDetails = (uid: string | number) => {
    console.log(`uid is ${uid}`);
}
logDetails('200')

const greet = (user: { name: string, uid: string | number }) => {
    console.log(`${user.name} says hello`);
}

greet({ name: 'mike', uid: 1 })
