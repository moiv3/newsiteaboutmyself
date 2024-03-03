// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const myList = document.querySelector('#list');
console.log(product);
console.log(qty);

form.addEventListener('submit',function(evt){
    evt.preventDefault();
    const a = product.value;
    const b = qty.value;
    const d = document.createElement('li');
    d.innerText = (`${b} ${a}`);
    console.log(d);
    myList.append(d);
    product.value = '';
    qty.value = '';

})