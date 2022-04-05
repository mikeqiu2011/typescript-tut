import { Invoice } from "./classes/Invoice.js"; // not TS but JS, otherwise browser does not know
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice('mike', 'gas fee', 100);
docTwo = new Payment('kevin', 'food fee', 200);
const docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach(doc => console.log(doc.format()));
