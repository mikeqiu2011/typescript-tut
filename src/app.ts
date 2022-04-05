// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "mike",
    age: 30,
    speak(text: string): void {
        console.log(text + this.name);
    },
    spend: function (amount: number): number {
        console.log(`I spent ${amount}`);
        return amount
    },
    // skills: [] // this does not compile as it not apprear in interface
};

console.log(me)

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);

}

greetPerson(me)


// classes
import { Invoice } from "./classes/Invoice.js" // not TS but JS, otherwise browser does not know

const invOne = new Invoice('mike', 'gas fee', 100)
const invTwo = new Invoice('kevin', 'food fee', 200)

// invOne.client = 'eric' // readonly property cannot be modified
// invOne.amount = 150 // property by default is public, which is not safe, after made private, you cannot access it

// console.log(invOne.format());

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
invoices.forEach(inv => console.log(inv.format()))



const form = document.querySelector('.new-item-form') as HTMLFormElement

// select by id for the inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);

})