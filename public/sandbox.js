"use strict";
const logDetails = (uid) => {
    console.log(`uid is ${uid}`);
};
logDetails('200');
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
greet({ name: 'mike', uid: 1 });
