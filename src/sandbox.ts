type StringOrNum = string | number
type User = { name: string, uid: string | number }

const logDetails = (uid: StringOrNum) => {
    console.log(`uid is ${uid}`);
}
logDetails('200')

const greet = (user: User) => {
    console.log(`${user.name} says hello`);
}

greet({ name: 'mike', uid: 1 })
