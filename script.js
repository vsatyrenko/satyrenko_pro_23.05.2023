const imageIndex = Math.floor(Math.random() * 9) + 1;

const randomImg = document.createElement("img");
randomImg.src = `/image/image${imageIndex}.jpg`;

document.body.appendChild(randomImg);
