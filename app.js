const carouselSlider = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselFullSize = carouselImages.length;
var cont = 0;
carouselImages.forEach((element) => {
    if(element.style.display != 'none'){
        cont++;
    }
});

// if(carouselImages[0]:visible.length == 0){
//     const carouselSize = carouselImages.length;
// }

// console.log(carouselImages[2].style.display);
console.log(cont);
//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
const size = carouselImages[0].clientWidth;
carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',() => {
    if(counter >= cont) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
prevBtn.addEventListener('click',() => {
    if(counter <= -1 ) return;
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlider.addEventListener('transitionend', () => {
    if(counter === cont){
        carouselSlider.style.transition = "none";
        counter = 0;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(counter === -1){
        carouselSlider.style.transition = "none";
        counter = cont-1;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})