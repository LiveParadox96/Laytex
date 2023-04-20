const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider-wrapper');
const sliderSlides = slider.querySelectorAll('.slider-slide');
const sliderPrevBtn = slider.querySelector('.slider-control-prev');
const sliderNextBtn = slider.querySelector('.slider-control-next');
const sliderRadioButtons = slider.querySelector('.slider-radio-buttons');

let slideWidth = sliderSlides[0].offsetWidth;
let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
    index = sliderSlides.length - 4;
    } else if (index >= sliderSlides.length - 3) {
    index = 0;
    }

    currentIndex = index;
  sliderWrapper.style.transform = `translateX(-${slideWidth * currentIndex}px)`;


    const radioButtons = sliderRadioButtons.querySelectorAll('label');
    radioButtons.forEach((button, i) => {
        if (i === currentIndex) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
    });
}

function nextSlide() {
    currentIndex++;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    goToSlide(currentIndex);
}

sliderPrevBtn.addEventListener('click', prevSlide);
sliderNextBtn.addEventListener('click', nextSlide);


for (let i = 0; i < sliderSlides.length; i++) {
    const radioButton = document.createElement('label');
    radioButton.addEventListener('click', () => goToSlide(i));
    sliderRadioButtons.appendChild(radioButton);
}

goToSlide(0);