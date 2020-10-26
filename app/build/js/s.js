setTimeout(() => {
  let textImg = document.querySelectorAll('.text-img');
  textImg.forEach(function (i) {
  i.style.zIndex = "11";
  });
}, 500);

if (document.documentElement.clientWidth < 1550) {
  let textImgFirst = document.querySelector('.text-img.first');
  let textImgSecond = document.querySelector('.text-img.second');
  let textImgThird = document.querySelector('.text-img.third');
  textImgFirst.setAttribute('y', "102");
  textImgSecond.setAttribute('y', "196");
  textImgThird.setAttribute('y', "290");
  console.log(textImgFirst.y);
}

if (document.documentElement.clientWidth < 767) {
  let textImgFirst = document.querySelector('.text-img.first');
  let textImgSecond = document.querySelector('.text-img.second');
  let textImgThird = document.querySelector('.text-img.third');
  textImgFirst.setAttribute('x', "25");
  textImgSecond.setAttribute('x', "25");
  textImgThird.setAttribute('x', "25");
  console.log(textImgFirst.y);
}