var bigImage = document.getElementsByClassName('content__img-big')[0].querySelector('img');

function changeSrc(element) {
    bigImage.src = element.querySelector('img').getAttribute('src');
}

function addProduct(target) {
    var productValue = document.getElementsByClassName('quantity-number')[0].value;
    var productTitle = document.getElementsByClassName('product__title')[0].innerHTML;
    alert('Товар \'' + productTitle + '\' в количестве ' + productValue + ' единиц добавлен в ' + target);
}


let lastPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
    if (scrollPos > 0) {
        document.getElementsByClassName('header')[0].style.opacity = "0";
    } else {
        document.getElementsByClassName('header')[0].style.opacity = "1";
    }
}

window.addEventListener('scroll', function (e) {
    lastPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastPosition);
            ticking = false;
        });
        ticking = true;
    }
});



document.addEventListener('click', function (e) {
    if (e.target.classList.contains('increase')) {
        ++e.target.parentElement.querySelector('input').value;
    } else if (e.target.classList.contains('decrease')) {
        --e.target.parentElement.querySelector('input').value;
    }
});

const btnMenu = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__body');
const toggleMenu = function() {
    menu.classList.toggle('_active')
    btnMenu.classList.toggle('_active');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('_active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});