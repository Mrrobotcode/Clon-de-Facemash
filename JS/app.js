let left = document.getElementById('left');
let right = document.getElementById('right');
var leftNum = '01'; 
var rightNum ='02';

left.addEventListener('click', function () {
    rightNum = getImage();
    right.setAttribute('src', `/Img/${rightNum}.png`);
});

right.addEventListener('click', function () {
    leftNum = getImage();
    left.setAttribute('src', `/Img/${leftNum}.png`);
});

function getImage() {
    let zero = '0';
    let number = Math.ceil(Math.random() * 10);
    if (number != 10) {
        number = zero + number;
}

if (number != leftNum && number != rightNum) {
    return number;}
else {
    return getImage();
}}