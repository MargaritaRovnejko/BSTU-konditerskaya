function changeClassActive(activeElement, searchClass, activeClass) {
    const arrayElements = document.querySelectorAll(searchClass);
    arrayElements.forEach(element => element.classList.remove(activeClass));
    activeElement.classList.add(activeClass);
};

function changeImage (event) {
    changeClassActive(event.target, '.portfolio__buttons .button2', 'button_colored');
    const photo = event.target.dataset.photo;
    const portfolioImages = document.querySelector('.portfolio__image').children;
    Array.from(portfolioImages).forEach((image, index) => image.src = `./assets/png/${photo}/${index + 1}.png`);
};

function buttonClick (event) {
    if (event.target.parentElement.classList.contains('buttonbox')) {
        changeImage (event);
    };
};

document.querySelector('.portfolio__buttons').addEventListener('click', buttonClick);
