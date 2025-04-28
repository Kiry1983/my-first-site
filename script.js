let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    let totalSlides = slides.length;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    let slides = document.querySelectorAll('.slides img');
    slideIndex = (slideIndex + 1) % slides.length; 
    showSlides();
}

function prevSlide() {
    let slides = document.querySelectorAll('.slides img');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
    showSlides();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);  
showSlides(); 
