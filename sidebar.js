const sidebar = document.querySelector('.sidebar');
const openBtn = document.querySelector('.sidebar-button-open');
const closeBtn = document.querySelector('.sidebar-button-close');

openBtn.addEventListener('click', function() {
  sidebar.classList.add('sidebar-open');
});

closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('sidebar-open');
});