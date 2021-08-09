
const scriptURL = 'https://script.google.com/macros/s/AKfycbxs1YgF1N54FRD2eJ2y0_7jhkhEqLwgi1FLMHRFUARWhcXXGYp2CFZQZqijOyYTUJqN/exec'
const form = document.forms['submit-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Movimiento Cargado!', response))
    .catch(error => alert.error('Error!', error.message))
})

const sbmt = document.querySelector('#enviar');
sbmt.addEventListener('click', () => {
    const form = document.getElementsByName('submit-form');
form.reset();
})