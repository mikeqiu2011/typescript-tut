const me = {
    name: "mike",
    age: 30,
    speak(text) {
        console.log(text + this.name);
    },
    spend: function (amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
    // skills: [] // this does not compile as it not apprear in interface
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
// classes
import { Invoice } from "./classes/Invoice.js"; // not TS but JS, otherwise browser does not know
const invOne = new Invoice('mike', 'gas fee', 100);
const invTwo = new Invoice('kevin', 'food fee', 200);
// invOne.client = 'eric' // readonly property cannot be modified
// invOne.amount = 150 // property by default is public, which is not safe, after made private, you cannot access it
// console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => console.log(inv.format()));
const form = document.querySelector('.new-item-form');
// select by id for the inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
