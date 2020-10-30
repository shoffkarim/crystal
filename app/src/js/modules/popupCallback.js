class PopUpCallback {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    let btnPopUpOpen = document.querySelector(".header-nav__callback");
    btnPopUpOpen.addEventListener("click", function (e) {
      e.preventDefault();
      let overlay = document.querySelector(".popup-overlay");
      let popup = document.querySelector(".popup.callback");
      overlay.classList.remove("popup--hidden");
      popup.classList.remove("popup--hidden");
    });

    let btnPopUpClose = document.querySelector(".btn-popup__close");
    btnPopUpClose.addEventListener("click", function (e) {
      e.preventDefault();
      let overlay = document.querySelector(".popup-overlay");
      let popup = document.querySelector(".popup.callback");
      overlay.classList.add("popup--hidden");
      popup.classList.add("popup--hidden");
    });
  }
}

export {PopUpCallback}