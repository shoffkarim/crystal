class Burger {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    let btnBurgerOpen = document.querySelector(".js-burger");
    btnBurgerOpen.addEventListener("click", function () {
      let body = document.querySelector("body");
      let menu = document.querySelector(".js-menu");
      menu.classList.add("js-menu__open");
      body.classList.add("scroll-hidden");
    });

    let btnBurgerClose = document.querySelector(".js-burger__close");
    btnBurgerClose.addEventListener("click", function () {
      let body = document.querySelector("body");
      let menu = document.querySelector(".js-menu");
      menu.classList.remove("js-menu__open");
      body.classList.remove("scroll-hidden");
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Burger };