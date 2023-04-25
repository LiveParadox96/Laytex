const btnOpenDrop= document.querySelector('.arrow-and-list')
const listsInDrop = document.querySelector('dropdown-header cursor');
const svg = document.querySelector('.svg')
svg.style.transform= 'rotate(' + 180 + 'deg)';
svg.style.marginLeft=5+'px'


btnOpenDrop.addEventListener('click', function() {
    listsInDrop.forEach(function(puntsItem) {
        if (puntsItem.style.display === 'none') {
            puntsItem.style.display = 'block';
        } else {
            puntsItem.style.display = 'none'
        }
    });
});