var angle = 0;
var index = 0;  // Add an index to keep track of the current image

const gallerySpin = (sign) => {
    const spinner = document.getElementById('spinner');
    const images = spinner.getElementsByTagName('img');  // Get the list of images

    if (!sign) {
        angle = angle + 45;
        index = (index + 1) % images.length;  // Increment the index, loop back to 0 if it exceeds the number of images
    } else {
        angle = angle - 45;
        index = (index - 1 + images.length) % images.length;  // Decrement the index, loop back to the last image if it's less than 0
    }

    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");

    const description = document.getElementById('description');  // Get the description element
    description.innerText = images[index].alt;  // Set the description text to the alt text of the current image
}

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', function () {
    gallerySpin('-');
});

rightButton.addEventListener('click', function () {
    gallerySpin('');
});
