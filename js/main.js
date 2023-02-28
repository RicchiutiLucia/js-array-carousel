const imagesArray = [
    'img/01.webp',
    'img/02.webp', 
    'img/03.webp', 
    'img/04.webp', 
    'img/05.webp'
];

const imageListDom = document.querySelector('.img-list');
let imageContent = "";
for(let i = 0; i < imagesArray.length; i++){
    const newImageWrapper = `<div class="img-wrapper">
                                <img class="image" src="${imagesArray[i]}">
                              </div>`;

    
    imageContent += newImageWrapper;
    
}

imageListDom.innerHTML = imageContent;
