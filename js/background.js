const images = [
    "dark-pastel-purple.jpeg", "731610.jpeg", "single-plain-violet.jpeg", "1467776.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;


//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;