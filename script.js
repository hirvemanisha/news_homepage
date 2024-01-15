let imageArray = [
    "./images/1_5upitw25fvzuNChKbYg_mQ.png",
    "./images/1_U2k3yEo7JEYfLabAvMxulg.png",
    "./images/WEB3.jpg",
];

let currentIndex = 0;
let displayedImage = document.getElementById("displayedImage");

function changeImage() {
    displayedImage.src = imageArray[currentIndex];
    currentIndex = (currentIndex + 1 === imageArray.length) ? 0 : currentIndex + 1;
}
changeImage(); // Initial image
setInterval(changeImage, 5000);


//FOR COLORS CHANGE
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const h1Element = document.getElementById('continuousRandomColorH1');

setInterval(function() {
    const randomColor = getRandomColor();
    h1Element.style.color = randomColor;
}, 1000); 
