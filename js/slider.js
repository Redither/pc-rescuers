const slider = document.querySelector('.services_container');
const line = slider.querySelector('.services_cards');
const slidesNum = line.querySelectorAll('.card').length;
const prev = document.querySelector('.services_button.-prev');
const next = document.querySelector('.services_button.-next');

let clicksLimit;
let translateWidth;
let clicks = 0;

function nextSlide() {
    if (clicks < clicksLimit) {
        clicks+=1;
    } else {
        clicks = clicksLimit;
    }
    line.style.transform = 'translateX(-' + clicks * translateWidth + '%)';
    // console.log(clicks);
}

function prevSlide() {
    if (clicks > 0) {
        clicks-=1;
    } else {
        clicks = 0;
    }
    line.style.transform = 'translateX(-' + clicks * translateWidth + '%)';
    // console.log(clicks);
}

function initSLider() {
    if (window.screen.width < 768) {
        clicksLimit = slidesNum -1;
        translateWidth = 100;
    } else if (window.screen.width < 1024) {
        clicksLimit = slidesNum -2;
        translateWidth = 50;
    } else if (window.screen.width < 1440) {
        clicksLimit = slidesNum -3;
        translateWidth = 33.3333333;
    } else {
        clicksLimit = slidesNum - 4;
        translateWidth = 25;
    }
    // console.log(clicksLimit);
}

window.onload = initSLider();
window.onresize = initSLider();
prev.onclick = function() {prevSlide();}
next.onclick = function() {nextSlide();}