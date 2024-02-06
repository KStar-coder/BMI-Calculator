// selecting the form 
const form = document.querySelector('form')
// To manipulate a form, we need addEventListener as well. We will use the 'submit' as event
form.addEventListener('submit', function (e) {
    e.preventDefault(); // so that it waits for submission and let's user enter the value

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2) // upto 2 decimal places

        // display the result 
        results.innerHTML = `<span>${bmi}</span>`
    }
})