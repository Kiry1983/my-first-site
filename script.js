const slider = document.getElementById('slider');
const slideTrack = document.getElementById('slideTrack');
let position = 0;
let speed = 1; 

function moveSlider() {
    position -= speed;
    if (Math.abs(position) >= slideTrack.scrollWidth / 2) {
        position = 0; 
    }
    slideTrack.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(moveSlider);
}

moveSlider();


slider.addEventListener('mouseenter', () => {
    speed = 0;
});
slider.addEventListener('mouseleave', () => {
    speed = 1;
});
