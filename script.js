let offset = 0; // зміщення від лівого краю
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-prev').addEventListener ('click', function() {
    offset = offset - 500;
    if (offset < 0) {
        offset = 2500;
    };
    sliderLine.style.right = offset + 'px';
});

document.querySelector('.slider-next').addEventListener ('click', function() {
    offset = offset + 500;
    if (offset >= 2510) {
        offset = 0;
    };
    sliderLine.style.right = offset + 'px';
});