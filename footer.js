const product = document.querySelector('.product-dropdown-lists');
const engage = document.querySelector('.engage-dropdown-lists');
const earnmoney = document.querySelector('.earnmoney-dropdown-lists');
const productList = document.querySelectorAll('.product-footer-dropdown-list');
const engageList = document.querySelectorAll('.engage-footer-dropdown-list');
const earnmoneyList = document.querySelectorAll('.earnmoney-footer-dropdown-list');

product.addEventListener('click', ()=>{
        for(let i = 0; i < productList.length; i++) {
            productList[i].addEventListener('click',selectDate)
        }
})

function selectDate(){
    if(productList.classList.contains('close')){
        productList.classList.remove('close');
    } else {
        productList.classList.add('close');
    }
}