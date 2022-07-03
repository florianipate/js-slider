const slider = document.querySelector('.slider-container');
const slideImages = document.querySelectorAll('.slide img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
slider.style.transform = 'translateX(' + (-size * counter) + 'px)';