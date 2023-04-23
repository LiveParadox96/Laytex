    const numBtn = document.querySelector('.btn-start-qvest');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    const modalDialog = document.querySelector('.modal-dialog');
    const modalUserName = document.querySelector('.modal-name-data')
    const modalUserPhone = document.querySelector('.modal-phone-data')
    const modalBtn=document.querySelector('.modal-btn-application') 

    numBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
        }); 
    close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
        }); 
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
    modal.classList.remove('show-modal');
        }
        }); 
    modalBtn.addEventListener('click', (event) => {
    if(modalUserName.value === '' || modalUserPhone.value.length < 10){
    event.stopPropagation();
        }
        }); 
    modalUserName.value = '';