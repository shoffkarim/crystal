class PopUpCallback {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector(".popup.callback")) {
      let btnPopUpOpen = document.querySelector(".header-nav__callback");
      btnPopUpOpen.addEventListener("click", function (e) {
        e.preventDefault();
        let overlay = document.querySelector(".popup-overlay");
        let popup = document.querySelector(".popup.callback");
        overlay.classList.remove("popup--hidden");
        popup.classList.remove("popup--hidden");
      });

      let btnBurgerPopUpOpen = document.querySelector(".burger-container .header-nav__callback");
      btnBurgerPopUpOpen.addEventListener("click", function (e) {
        e.preventDefault();
        let overlay = document.querySelector(".popup-overlay");
        let popup = document.querySelector(".popup.callback");
        overlay.classList.remove("popup--hidden");
        popup.classList.remove("popup--hidden");
      });

      let btnsPopUpClose = document.querySelectorAll(".btn-popup__close");
      btnsPopUpClose.forEach((btnPopUpClose) => btnPopUpClose.addEventListener("click", function (e) {
        e.preventDefault();
        let overlay = document.querySelector(".popup-overlay");
        let popup = document.querySelector(".popup.callback");
        overlay.classList.add("popup--hidden");
        popup.classList.add("popup--hidden");
      }));
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PopUpCallback };