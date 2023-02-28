const imagesArray = [
    'img/01.webp',
    'img/02.webp', 
    'img/03.webp', 
    'img/04.webp', 
    'img/05.webp'
];

const imageListDom = document.querySelector('.img-list');
const rightImageList = document.querySelector('.img-list-right');

let imageContent = "";
let imageContentRight = "";

for(let i = 0; i < imagesArray.length; i++){
    const newImageWrapper = `<div class="img-wrapper">
                                <img class="image" src="${imagesArray[i]}">
                              </div>`;

    imageContent += newImageWrapper;

    const newImageRight = ` <div class="right-image">
                                <img class="image" src="${imagesArray[i]}">
                            </div>`;

    imageContentRight += newImageRight;
    
}

imageListDom.innerHTML = imageContent;
rightImageList.innerHTML = imageContentRight;



const imagesWrapperDom = document.getElementsByClassName('img-wrapper');
//console.log(imageWrapperDom);
const imageRightDom = document.getElementsByClassName('img-right');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
imageRightDom[activeImage].classList.add('border');


const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', 
    function(){
        if(activeImage < imagesWrapperDom.length - 1){
            imagesWrapperDom[activeImage].classList.remove('show');
            imageRightDom[activeImage].classList.remove('border');
            activeImage++;
            imagesWrapperDom[activeImage].classList.add('show');
            imageRightDom[activeImage].classList.add('border');
            
        }else if(activeImage == imagesWrapperDom.length - 1){
            imagesWrapperDom[activeImage].classList.remove('show');
            imageRightDom[activeImage].classList.remove('border');
            activeImage = 0;
            imagesWrapperDom[activeImage].classList.add('show');
            imageRightDom[activeImage].classList.add('border');
        }
        
    }
);

prevDom.addEventListener('click', 
    function(){
        if(activeImage > 0){
            imagesWrapperDom[activeImage].classList.remove('show');
            imageRightDom[activeImage].classList.remove('border');
            activeImage--;
            imagesWrapperDom[activeImage].classList.add('show');
            imageRightDom[activeImage].classList.add('border');
        }else if(activeImage == 0){
            imagesWrapperDom[activeImage].classList.remove('show');
            imageRightDom[activeImage].classList.remove('border');
            activeImage = imagesWrapperDom.length - 1;
            imagesWrapperDom[activeImage].classList.add('show');
            imageRightDom[activeImage].classList.add('border');

        }
        
    }
);

