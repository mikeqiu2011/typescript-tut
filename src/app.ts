// TS has no access to html, so the anchor might be null, thus anchor may
// not have the href, as developer, if you are certain, you can add a "!"
// const anchor = document.querySelector('a')!
// console.log(anchor.href);

// select by css class name and cast it into FORM
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

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