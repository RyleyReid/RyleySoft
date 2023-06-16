var angle = 0;
const gallerySpin = (sign) => {
    const spinner = document.getElementById('spinner');
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', function () {
    gallerySpin('-');
});

rightButton.addEventListener('click', function () {
    gallerySpin('');
});