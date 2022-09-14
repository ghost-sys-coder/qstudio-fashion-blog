// NAVIGATION
const navigationBar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle');


const menu = () => {
    if (navigationBar.classList.contains('active')) {
        navigationBar.classList.remove('active');

        toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`
    } else {
        navigationBar.classList.add('active');

        toggleBtn.innerHTML = `<i class="fas fa-times"></i>`
    }
}

toggleBtn.addEventListener('click', menu);


// USER PROFILE CONTENT
const userProfileIcon = document.querySelector('.fa-user');
console.log(userProfileIcon)

// SLIDER TODAY TRENDING
const sliderContainer = [...document.querySelectorAll('.trending--articles-container')];
const trendingSection = document.querySelector('.trending');
const nextButton = [...document.querySelectorAll('.right-btn')];
const prevButton = [...document.querySelectorAll('.left-btn')];

sliderContainer.forEach((item, i) => {
    let sliderContainerDimensions = item.getBoundingClientRect();
    let sliderContainerWidth = sliderContainerDimensions.width;

    nextButton[i].addEventListener('click', () => {
        item.scrollLeft += sliderContainerWidth;
    })

    prevButton[i].addEventListener('click', () => {
        item.scrollLeft -= sliderContainerWidth;
    })
})


// TRENDING BOOKS SECTION 
const bestSellersSection = document.querySelector('.best--sellers');
const bookLeftButton = bestSellersSection.querySelector('.left-btn');
const bookRightButton = bestSellersSection.querySelector('.right-btn');

const bookSlider = bestSellersSection.querySelector('.book--cards-container');
const bookSlides = bestSellersSection.getElementsByClassName('swiper-slide');



function prev() {
    bookSlider.prepend(bookSlides[bookSlides.length - 1])
}

function next() {
    bookSlider.append(bookSlides[0]);
}


bookLeftButton.addEventListener('click', prev);

bookRightButton.addEventListener('click', next);

const body = document.querySelector('body');
