setTimeout(() => {
  let textImg = document.querySelectorAll(".text-img");
  textImg.forEach(function (i) {
    i.style.zIndex = "11";
  });
}, 500);

if (document.documentElement.clientWidth < 1550) {
  let textImgFirst = document.querySelector(".text-img.first");
  let textImgSecond = document.querySelector(".text-img.second");
  let textImgThird = document.querySelector(".text-img.third");
  textImgFirst.setAttribute("y", "102");
  textImgSecond.setAttribute("y", "196");
  textImgThird.setAttribute("y", "290");
  console.log(textImgFirst.y);
}

if (document.documentElement.clientWidth < 767) {
  let textImgFirst = document.querySelector(".text-img.first");
  let textImgSecond = document.querySelector(".text-img.second");
  let textImgThird = document.querySelector(".text-img.third");
  textImgFirst.setAttribute("x", "25");
  textImgSecond.setAttribute("x", "25");
  textImgThird.setAttribute("x", "25");
  console.log(textImgFirst.y);
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".opening").classList.remove("opening");
  }, 1000);
});

if (document.querySelector('.cookie')) {
  let cookieAgree = document.querySelector('.btn-cookie.btn-cookie__agree');
  cookieAgree.addEventListener('click', function () {
    document.querySelector('.cookie').classList.remove('cookie__open');
  });
}

window.addEventListener("scroll", function () {
  let cH = document.documentElement.clientHeight;
  if (window.pageYOffset > cH - 400) {
    document.querySelector('.btn-up').classList.remove('btn-up__hidden');
  }
  if (window.pageYOffset < cH - 400) {
    document.querySelector('.btn-up').classList.add('btn-up__hidden');
  }
  if (window.pageYOffset > cH - 400) {
    document.querySelector('.catalog').classList.remove('opening');
  }
  if (window.pageYOffset > cH + 1100) {
    document.querySelector('.company').classList.remove('opening');
  }
});

let btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', function () {
  let header = document.querySelector('.header-top');
  header.scrollIntoView({ behavior: 'smooth' });
});

// burger =====================

let btnBurgerOpen = document.querySelector('.js-burger');
btnBurgerOpen.addEventListener('click', function () {
  let menu = document.querySelector('.js-menu');
  menu.classList.add('js-menu__open');
});

let btnBurgerClose = document.querySelector('.js-burger__close');
btnBurgerClose.addEventListener('click', function () {
  let menu = document.querySelector('.js-menu');
  menu.classList.remove('js-menu__open');
});

// callback =================

let btnPopUpOpen = document.querySelector('.header-nav__callback');
btnPopUpOpen.addEventListener('click', function (e) {
  e.preventDefault();
  let overlay = document.querySelector('.popup-overlay');
  let popup = document.querySelector('.popup.callback');
  overlay.classList.remove('popup--hidden');
  popup.classList.remove('popup--hidden');
});

let btnPopUpClose = document.querySelector('.btn-popup__close');
btnPopUpClose.addEventListener('click', function (e) {
  e.preventDefault();
  let overlay = document.querySelector('.popup-overlay');
  let popup = document.querySelector('.popup.callback');
  overlay.classList.add('popup--hidden');
  popup.classList.add('popup--hidden');
});

// validation ==================
let blocks = document.querySelectorAll('.callback-form__block');
blocks.forEach(function (block) {
  let input = block.querySelector('.js-anim');
  let label = block.querySelector('label');
  input.addEventListener('focus', function () {
    label.style.display = "none";
  });
  input.addEventListener('blur', function () {
    if (input.value === "") {
      label.style.display = "block";
    }
  });
});

let btnSubmit = document.querySelector('.btn-form');
btnSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  let validList = document.querySelectorAll('.js-valid[data-req=true]');
  validList.forEach(function (i) {
    let value = i.value;
    let type = i.getAttribute('type');
    switch (type) {
      case 'tel':
        // eslint-disable-next-line no-case-declarations
        let regTel = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
        if (!regTel.test(value)) {
          i.classList.add('error');
          i.classList.remove('good');
        } else {
          i.classList.add('good');
          i.classList.remove('error');
        }
        break;
      case 'text':
        // eslint-disable-next-line no-case-declarations
        let regText = new RegExp(/^[а-яА-ЯёЁ]/);
        if (!regText.test(value)) {
          i.classList.add('error');
          i.classList.remove('good');
        } else {
          i.classList.add('good');
          i.classList.remove('error');
        }
        break;
      default:
        break;
    }
  });
});
