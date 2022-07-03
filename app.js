const carouselSlider = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselSize = carouselImages.length;
console.log(carouselImages.length);
//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;
carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',() => {
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
prevBtn.addEventListener('click',() => {
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlider.addEventListener('transitionend', () => {
    if(counter === carouselSize){
        carouselSlider.style.transition = "none";
        counter = 0;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(counter === -1){
        carouselSlider.style.transition = "none";
        counter = carouselSize-1;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})