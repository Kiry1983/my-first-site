const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const slideCount = slides.length;


const firstClone = slides[0].cloneNode(true);
slidesContainer.appendChild(firstClone);

function moveToSlide() {
    slidesContainer.style.transition = "transform 0.5s ease";
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}


slidesContainer.addEventListener('transitionend', () => {
    if (index === slideCount) {
        slidesContainer.style.transition = "none"; 
        index = 0;
        slidesContainer.style.transform = `translateX(0)`;
    }
});

function nextSlide() {
    index++;
    moveToSlide();
}

function prevSlide() {
    if (index === 0) {
        index = slideCount;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            slidesContainer.style.transition = "transform 0.5s ease";
            index--;
            moveToSlide();
        }, 20);
    } else {
        index--;
        moveToSlide();
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);
