const images = [
    "mountains.jpg", "nightsky.jpg", "sunset.jpg", "nature.jpg", "landscape,jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;


//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;