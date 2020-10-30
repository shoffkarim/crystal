class TextImg {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (
      document.documentElement.clientWidth < 1550
      && document.querySelector(".text-img")
    ) {
      let textImgFirst = document.querySelector(".text-img.first");
      let textImgSecond = document.querySelector(".text-img.second");
      let textImgThird = document.querySelector(".text-img.third");
      textImgFirst.setAttribute("y", "102");
      textImgSecond.setAttribute("y", "196");
      textImgThird.setAttribute("y", "290");
    }

    if (
      document.documentElement.clientWidth < 767
      && document.querySelector(".text-img")
    ) {
      let textImgFirst = document.querySelector(".text-img.first");
      let textImgSecond = document.querySelector(".text-img.second");
      let textImgThird = document.querySelector(".text-img.third");
      textImgFirst.setAttribute("x", "25");
      textImgSecond.setAttribute("x", "25");
      textImgThird.setAttribute("x", "25");
      console.log(textImgFirst.y);
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { TextImg };