const checkbox = document.querySelector('input[type="checkbox"]');
const feedback = document.querySelector('.feedback');
const nameInput = document.querySelector('.name-data')
const phoneInput = document.querySelector('.phone-data')
nameInput.setAttribute('disabled', true)
phoneInput.setAttribute('disabled', true)


checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    feedback.classList.add('active');
    nameInput.removeAttribute('disabled')
    phoneInput.removeAttribute('disabled')
} else {
    feedback.classList.remove('active');
    nameInput.setAttribute('disabled', true);
    nameInput.value=''
    phoneInput.setAttribute('disabled', true);
    phoneInput.value=''
  }

});

// if(!checkbox.checked){
//     return name.setAttribute('maxlenght', 0)
// }