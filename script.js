let slideIndex = 0; 

// Функция для отображения слайдов
function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`; 
}

// Функция для переключения на следующий слайд
function nextSlide() {
    slideIndex++;
    showSlides();
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    slideIndex--;
    showSlides();
}

// Автоматическое переключение слайдов каждую секунду
setInterval(nextSlide, 3000); 
showSlides(); 

