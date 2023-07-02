const sparkle = document.querySelector('#sparkle');

document.addEventListener('mousemove', e => {
    sparkle.style.left = e.pageX - 25 + 'px';
    sparkle.style.top = e.pageY - 25 + 'px';
});