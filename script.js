const photos = {
  Cakes: [
    'assets/png/Cakes/1.png',
    'assets/png/Cakes/2.png',
    'assets/png/Cakes/3.png',
    'assets/png/Cakes/4.png',
    'assets/png/Cakes/5.png',
    'assets/png/Cakes/6.png',
    'assets/png/Cakes/7.png',
    'assets/png/Cakes/8.png',
    'assets/png/Cakes/9.png',
    'assets/png/Cakes/10.png',
    'assets/png/Cakes/11.png',
    'assets/png/Cakes/12.png'
  ],
  Minicakes: [
    'assets/png/Minicakes/1.png',
    'assets/png/Minicakes/2.png',
    'assets/png/Minicakes/3.png',
    'assets/png/Minicakes/4.png',
    'assets/png/Minicakes/5.png',
    'assets/png/Minicakes/6.png',
    'assets/png/Minicakes/7.png',
    'assets/png/Minicakes/8.png',
    'assets/png/Minicakes/9.png',
    'assets/png/Minicakes/10.png',
    'assets/png/Minicakes/11.png',
    'assets/png/Minicakes/12.png'
  ],
  Cupcakes: [
    'assets/png/Cupcakes/1.png',
    'assets/png/Cupcakes/2.png',
    'assets/png/Cupcakes/3.png',
    'assets/png/Cupcakes/4.png',
    'assets/png/Cupcakes/5.png',
    'assets/png/Cupcakes/6.png',
    'assets/png/Cupcakes/7.png',
    'assets/png/Cupcakes/8.png',
    'assets/png/Cupcakes/9.png',
    'assets/png/Cupcakes/10.png',
    'assets/png/Cupcakes/11.png',
    'assets/png/Cupcakes/12.png'
  ],
  Doughnuts: [
    'assets/png/Doughnuts/1.png',
    'assets/png/Doughnuts/2.png',
    'assets/png/Doughnuts/3.png',
    'assets/png/Doughnuts/4.png',
    'assets/png/Doughnuts/5.png',
    'assets/png/Doughnuts/6.png',
    'assets/png/Doughnuts/7.png',
    'assets/png/Doughnuts/8.png',
    'assets/png/Doughnuts/9.png',
    'assets/png/Doughnuts/10.png',
    'assets/png/Doughnuts/11.png',
    'assets/png/Doughnuts/12.png'
  ],
}

const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);

let photo = 'Cakes';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src =  photos[photo][index]);
}

function changeClassActive(activeElement, searchClass, activeClass) {
    const arrayElements = document.querySelectorAll(searchClass);
    arrayElements.forEach(element => element.classList.remove(activeClass));
    activeElement.classList.add(activeClass);
};

function changeImage (event) {
    changeClassActive(event.target, '.portfolio__buttons .button2', 'button_colored');
    photo = event.target.dataset.photo;
    const portfolioImages = document.querySelector('.slider_center').children;
    imagesCenter.forEach((image, index) => image.src = `./assets/png/${photo}/${index + 1}.png`);
};

function buttonClick (event) {
    if (event.target.parentElement.classList.contains('buttonbox')) {
        changeImage (event);
    };
};

document.querySelector('.portfolio__buttons').addEventListener('click', buttonClick);

function shiftPhoto(arrow) {
    var el = '';
    let w = 1;
    if (window.innerWidth >= 1024) {
        w = 6
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        w = 4
    } else {
        w = 1
    }
    
    if (arrow == 'left') {
      photos[photo] = photos[photo].slice(w).concat(photos[photo].slice(0, w));
      console.log(photos[photo]);
    } else if (arrow == 'right') {
      photos[photo] = photos[photo].slice(-w).concat(photos[photo].slice(0, -w));
    }
  }
  
  const slider = document.querySelector('.slider');
  
  const buttonLeft = document.querySelector('.button_slider_left');
  const buttonRight = document.querySelector('.button_slider_right');
  
  function sliderLeft() {
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_left');
    shiftPhoto('left');
    redrawPhoto(imagesRight);
  };
  
  function sliderRight() {
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_right');
    shiftPhoto('right');
    redrawPhoto(imagesLeft);
  };
  
  slider.addEventListener('animationend', () => {
    redrawPhoto(imagesCenter);
    slider.classList.remove('move_left');
    slider.classList.remove('move_right');
    buttonLeft.addEventListener('click', sliderRight);
    buttonRight.addEventListener('click', sliderLeft);
  });
  
  
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
  

