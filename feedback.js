const checkbox = document.querySelector('input[type="checkbox"]');
const feedback = document.querySelector('.feedback');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    feedback.classList.add('active');
  } else {
    feedback.classList.remove('active');
  }
});