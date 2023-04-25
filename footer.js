const product = document.querySelector('.product-nasting');
const engage = document.querySelector('.engage-nasting');
const earnmoney = document.querySelector('.earnmoney-nesting');
const productList = document.querySelectorAll('.product-lists');
const engageList = document.querySelectorAll('.engage-lists');
const earnmoneyList = document.querySelectorAll('.earnmoney-lists');

product.addEventListener('click', function() {
    productList.forEach(function(puntsItem) {
        if (puntsItem.style.display === 'none') {
            puntsItem.style.display = 'block';
        } else {
            puntsItem.style.display = 'none'
        }
    });
});

engage.addEventListener('click', function() {
    engageList.forEach(function(puntsItem) {
        if (puntsItem.style.display === 'none') {
            puntsItem.style.display = 'block';
        } else {
            puntsItem.style.display = 'none'
        }
    });
});

earnmoney.addEventListener('click', function() {
    earnmoneyList.forEach(function(puntsItem) {
        if (puntsItem.style.display === 'none') {
            puntsItem.style.display = 'block';
        } else {
            puntsItem.style.display = 'none'
        }
    });
});