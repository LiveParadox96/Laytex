const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.arrow-prev');
const nextBtn = slider.querySelector('.arrow-next');
const radioButtons = slider.querySelectorAll('.radio-buttons input[type="radio"]');

let currentSlide = 0;

function goToSlide(index) {
    slides.forEach(slide => slide.style.transform = `translateX(-${index}00%)`);
    currentSlide = index;
    radioButtons[currentSlide].checked = true;
}

prevBtn.addEventListener('click', () => goToSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1));

nextBtn.addEventListener('click', () => goToSlide(currentSlide < slides.length - 1 ? currentSlide + 1 : 0));

radioButtons.forEach((button, index) => button.addEventListener('click', () => goToSlide(index)));