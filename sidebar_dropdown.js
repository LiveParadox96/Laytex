const nestingMenu = document.querySelector('.siderbar-menu-price-nesting');
const puntsList = document.querySelectorAll('.sidebar-menu-price-list-punts');

  nestingMenu.addEventListener('click', function() {
    puntsList.forEach(function(puntsItem) {
      if (puntsItem.style.display === 'none') {
        puntsItem.style.display = 'block';
      } else {
        puntsItem.style.display = 'none'
      }
    });
  });