    const btnOpenModalWindow = document.querySelector('.btn-start-qvest');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    const modalDialog = document.querySelector('.modal-dialog');
    const modalUserName = document.querySelector('.modal-name-data')
    const modalUserPhone = document.querySelector('.modal-phone-data')
    const modalBtn=document.querySelector('.modal-btn-application') 
    const modalCheckbox = document.querySelector('.modal-checkbox')
    const textPartModal = document.querySelector('.modal-text-part')

    btnOpenModalWindow.addEventListener('click', () => {
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
    if(modalUserPhone.lenght!==11){
        modalUserPhone.style.border='1px solid #FB9B9B';
        event.preventDefault();
    if(modalUserName.value.length>2 && modalUserName.value.length<8){
        modalBtn.submit=true;
    } else {
        modalUserName.style.border='1px solid #FB9B9B';
        event.preventDefault();
        }
    }});
        modalUserName.disabled = true;
        modalUserPhone.disabled = true;
        modalBtn.disabled = true;
        textPartModal.style.opacity=0.5;

        modalCheckbox.addEventListener('click', ()=> {
            if (modalCheckbox.checked){
            modalUserName.disabled = false;
            modalUserPhone.disabled = false;
            modalBtn.disabled = false;
            textPartModal.style.opacity=1;
            } else {
                modalUserName.disabled = true;
                modalUserPhone.disabled = true;
                modalBtn.disabled = true;
                textPartModal.style.opacity=0.5;
                modalUserName.value='';
                modalUserPhone.value='';
            }
        })