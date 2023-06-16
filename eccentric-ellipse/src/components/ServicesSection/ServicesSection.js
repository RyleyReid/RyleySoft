var angle = 0;
var index = 0;  

const gallerySpin = (sign) => {
    const spinner = document.getElementById('spinner');
    const images = spinner.getElementsByTagName('img');

    if (!sign) {
        angle = angle + 45;
        index = (index + 1) % images.length;
    } else {
        angle = angle - 45;
        index = (index - 1 + images.length) % images.length;
    }

    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");

    const description = document.getElementById('description');
    description.innerText = images[index].alt;
    styleInActive(images);
    styleActive(images[index]);

}


const styleActive = (imageObject) => {
    imageObject.style.opacity = 1;
}
const styleInActive = (images) => {
    Array.from(images).forEach(image => {
        image.style.opacity = 0.5;
    });
}

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', function () {
    gallerySpin('-');
});

rightButton.addEventListener('click', function () {
    gallerySpin('');
});
