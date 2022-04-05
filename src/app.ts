// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // private amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

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