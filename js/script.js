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

    // Делаем что-нибудь с позицией скролла
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

function plusFunction() {
    console.log(this);
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("increase")) {
        ++e.target.parentElement.querySelector("input").value;
    } else if (e.target.classList.contains("decrease")) {
        --e.target.parentElement.querySelector("input").value;
    }
});

const menuBtn = document.querySelector('.menu__btn');
if (menuBtn) {
    const menuBody = document.querySelector('.menu__body');
    menuBtn.addEventListener("click", function name(e) {
        menuBtn.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
    console.log(menuBtn);
}