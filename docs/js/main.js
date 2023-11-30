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
const contactForm = document.querySelector('.contact__form')
const contactSubmit = document.querySelector('.contact__submit')
const commodityColor = document.querySelectorAll('.commodity__color-item')
const commoditySize = document.querySelectorAll('.commodity__size-item')
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
})

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


function contactSend(event) {
    event.preventDefault()
    contactSubmit.style.display = 'block'
}

document.addEventListener('submit', contactSend)

commodityColor.forEach(element => {
    element.addEventListener('click', () => {
        commodityColor.forEach(e => e.classList.remove('commodity__color-item--active'));
        element.classList.add('commodity__color-item--active');
    });
});

commoditySize.forEach(element => {
    element.addEventListener('click', () => {
        commoditySize.forEach(e => e.classList.remove('commodity__size-item--active'));
        element.classList.add('commodity__size-item--active');
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".store__button");
    const products = document.querySelectorAll(".store__product-content");
    const totalCount = document.querySelector(".total__count");
    const noProductsText = document.querySelector(".store__noproducts");
    const paginationButtons = document.querySelectorAll('.store__link-button');
    let currentPage = 1;

    filterProducts("all", currentPage);

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            filterButtons.forEach(btn => btn.classList.remove("store__button--active"));
            event.target.classList.add("store__button--active");

            if (event.target.dataset.category === "all") {
                currentPage = 1;
                updatePagination(currentPage);
            } else {
                currentPage = 1;
                filterProducts(event.target.dataset.category, currentPage);
            }
        });
    });

    function filterProducts(category, page) {
        const itemsPerPage = (category === "all" && page === 1) ? 9 : 3;
        let visibleCount = 0;
        let hasProducts = false;

        const totalProducts = products.length;

        products.forEach((product, index) => {
            const productCategory = product.dataset.category;
            const activeButtons = document.querySelectorAll(".store__button--active");
            const activeCategories = Array.from(activeButtons).map(button => button.dataset.category);

            if (activeCategories.includes("all") || activeCategories.includes(productCategory)) {
                if (page === 1) {
                    if (index < (totalProducts - 3)) {
                        product.style.display = "block";
                        visibleCount++;
                        hasProducts = true;
                    } else {
                        product.style.display = "none";
                    }
                } else if (page === 2) {
                    if (index >= (totalProducts - 3)) {
                        product.style.display = "block";
                        visibleCount++;
                        hasProducts = true;
                    } else {
                        product.style.display = "none";
                    }
                } else {
                    product.style.display = "none";
                }
            } else {
                product.style.display = "none";
            }
        });

        totalCount.textContent = `Показано: ${visibleCount} из ${totalProducts} товаров`;
        noProductsText.style.display = hasProducts ? "none" : "block";
    }

    function updatePagination(currentPage) {
        paginationButtons.forEach((button, index) => {
            if (index + 1 === currentPage) {
                button.classList.add('store__link-button--active');
            } else {
                button.classList.remove('store__link-button--active');
            }
        });

        filterProducts("all", currentPage);
    }

    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentPage = index + 1;
            updatePagination(currentPage);
        });
    });

    paginationButtons[0].click();
});





const cartCountElement = document.getElementById('menu__basket-count');
const maxCartItems = 5;

let cartCount = 0;

function updateCartCount() {
    cartCountElement.textContent = cartCount;
}
const commodityButton = document.querySelector('.commodity__button');
commodityButton.addEventListener('click', () => {
    if (cartCount < maxCartItems) {
        cartCount++;
        updateCartCount();
        cartCountElement.classList.remove('menu__basket-count--hidden');
    } else {
        cartCountElement.style.backgroundColor = 'red'
        alert('Превышено кол-во товаров в корзине')
    }
});












