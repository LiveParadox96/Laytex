const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.slider-wrapper');
const sliderSlides = slider.querySelectorAll('.slider-slide');
const sliderPrevBtn = slider.querySelector('.slider-control-prev');
const sliderNextBtn = slider.querySelector('.slider-control-next');
const sliderRadioButtons = slider.querySelector('.slider-radio-buttons');

let slideWidth = sliderSlides[0].offsetWidth;
let currentIndex = 0;

// Создаем заранее все элементы label
const radioButtons = [];
for (let i = 0; i < sliderSlides.length - 2; i++) {
    const radioButton = document.createElement('label');
    radioButton.classList.add('slider-radio-button');
    radioButton.addEventListener('click', () => goToSlide(i));
    sliderRadioButtons.appendChild(radioButton);
    radioButtons.push(radioButton);
}

function goToSlide(index) {
    if (index < 0) {
    index = sliderSlides.length - 4;
    } else if (index >= sliderSlides.length - 2) {
    index = 0;
    }

    currentIndex = index;
  sliderWrapper.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

  // Меняем классы активного и неактивных элементов
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

goToSlide(0);