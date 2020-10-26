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