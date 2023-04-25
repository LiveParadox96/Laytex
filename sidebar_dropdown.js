const nestingMenuBtn = document.querySelector('.siderbar-menu-price-nesting');
const puntsList = document.querySelectorAll('.sidebar-menu-price-list-punts');

  nestingMenuBtn.addEventListener('click', function() {
    puntsList.forEach(function(puntsItem) {
      if (puntsItem.style.display == 'block') {
        puntsItem.style.display = 'none';
      } else {
        puntsItem.style.display = 'block';
      }
    });
  });