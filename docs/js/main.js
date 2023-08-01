$(function () {
    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        draggable: false,
        appendArrows: $('.team__arrows'),
        appendDots: $('.team__dots'),
    });

    $('.team__arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.team__dots').on('click', function (e) {
        e.preventDefault()
    })
})


//      P O P U P  W I N D O W


const scrollModalFixed = document.body
const menu = document.querySelector('.menu')
const buttonOpenModal = document.querySelector('.menu__number-link')
const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')
const modalWindowAfter = document.querySelector('.modal__window-after')
const form = document.querySelector('.modal__form')
const header = document.querySelector('.header')

const modalOpen = () => {
    modal.classList.add('modal--open')
    modal.classList.add('modal__window--animation')
    scrollModalFixed.classList.add('modal__scroll-fixed')
}

const modalClose = () => {
    modal.classList.remove('modal--open')
    scrollModalFixed.classList.remove('modal__scroll-fixed')
}

buttonOpenModal.addEventListener('click', () => {
    modalOpen()
    modalWindow.classList.add('modal__window--up')
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn') || target.classList.contains('modal__window-after-button')) {
        modalClose()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
        modalClose()
    }
})


function formSubmit(event) {
    event.preventDefault()
    modalWindow.classList.add('modal__window--open')
    modalWindowAfter.classList.add('modal__window-after--active')
    modalWindowAfter.classList.add('modal__window-after--animation')
}

form.addEventListener('submit', formSubmit)


// const intervalModal = setInterval(function (event) {
//     const target = event.target
//     if (target && target.classList.contains('modal__window__after--active')) {
//         modalWindowAfter.classList.remove('modal__window-after--active')
//         modalClose()
//         console.log('dwdw');
//     }
// }, 5000
// )

function menuFixed() {
    menu.classList.add('menu--active')
    header.style.paddingTop = '260px'
}

document.addEventListener('scroll', menuFixed)


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".store__button");
    const products = document.querySelectorAll(".store__product-content");
    const totalCount = document.querySelector(".total__count");
    const noProductsText = document.querySelector(".store__noproducts");

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const category = event.target.dataset.category;

            if (category === "all") {
                event.target.classList.toggle("store__button--active");
                filterButtons.forEach(btn => {
                    if (btn !== event.target) {
                        btn.classList.remove("store__button--active");
                    }
                });
            } else {
                event.target.classList.toggle("store__button--active");
                const allButton = document.querySelector('[data-category="all"]');
                if (allButton) {
                    allButton.classList.remove("store__button--active");
                }
            }
            
            filterProducts();
        });
    });

    function filterProducts() {
        let visibleCount = 0;
        let hasProducts = false;

        products.forEach(product => {
            const productCategory = product.dataset.category;
            const activeButtons = document.querySelectorAll(".store__button--active");
            const activeCategories = Array.from(activeButtons).map(button => button.dataset.category);

            if (activeCategories.includes("all") || activeCategories.includes(productCategory)) {
                product.style.display = "block";
                visibleCount++;
                hasProducts = true;
            } else {
                product.style.display = "none";
            }
        });

        totalCount.textContent = `Показано: ${visibleCount} из 12 товаров`;
        noProductsText.style.display = hasProducts ? "none" : "block";
    }
});
















