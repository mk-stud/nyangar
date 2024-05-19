//scrolling through the gallery 
let elements = document.querySelectorAll('main li');
elements.forEach((element) => {
    element.addEventListener('click', () => {

        let clickedImage = element.querySelector('img');
        let ref = clickedImage.src;

        let showcase = document.querySelector('#showcase');
        showcase.setAttribute('src', ref);
    });

});

//buttons in the gallery
var imgArray = [];
var currentIndex = 0;

imgArray.push('../img/pic1.jpg');
imgArray.push('../img/pic2.jpg');
imgArray.push('../img/pic3.jpg');
imgArray.push('../img/pic4.jpg');
imgArray.push('../img/pic5.jpg');
imgArray.push('../img/render.jpg');
imgArray.push('../img/753.png');

function nextImage() {
    currentIndex = (currentIndex + 1) % imgArray.length; //when you reach the end of the array, the index creates a loop and goes to the beginning
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
    updateImage();
}

function updateImage() {
    var imgElement = document.getElementById('showcase');
    imgElement.src = imgArray[currentIndex];
}
updateImage();
