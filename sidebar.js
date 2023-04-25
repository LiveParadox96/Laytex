const sidebar = document.querySelector('.sidebar-head-window');
const openBtn = document.querySelector('.sidebar-button-open');
const closeBtn = document.querySelector('.sidebar-button-close');
const blackfon = document.querySelector('.sidebar')
openBtn.addEventListener('click', function() {
  sidebar.classList.add('sidebar-open');
  blackfon.style.display='block';
});

closeBtn.addEventListener('click', function() {
  sidebar.classList.remove('sidebar-open');
  blackfon.style.display='none'
});