const carouselSlider = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',() => {
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});