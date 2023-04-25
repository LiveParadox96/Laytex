const nameInput = document.querySelector('.name-data');
const phoneInput = document.querySelector('.phone-data');
const checkbox = document.querySelector('.checkbox');
const btn=document.querySelector('.btn-application');
const feedback = document.querySelector('.feedback')
// Блокируем поля ввода при загрузке страницы
nameInput.disabled = true;
phoneInput.disabled = true;
btn.disabled=true

btn.addEventListener('click', (event) => {
  if(phoneInput.lenght!==11){
      phoneInput.style.border='1px solid #FB9B9B';
      event.preventDefault();
  if(nameInput.value.length>2 && nameInput.value.length<8){
    btn.submit=true;
  } else {
    nameInput.style.border='1px solid #FB9B9B';
    setTimeout(()=>{
      nameInput.style.border='border: 1px solid #DDDDDD'
    },2000)
    event.preventDefault();
  }}
      }); 
// Активируем поля ввода при клике на чекбокс
checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    nameInput.disabled = false;
    phoneInput.disabled = false;
    btn.disabled=false;
    feedback.style.opacity=1
  } else {
    feedback.style.opacity=0.5
    nameInput.disabled = true;
    phoneInput.disabled = true;
    btn.disabled=true
    phoneInput.value= '';
    nameInput.value=''
  }
});