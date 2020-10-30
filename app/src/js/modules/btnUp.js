class BtnUp {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    let btnUp = document.querySelector(".btn-up");
    btnUp.addEventListener("click", function () {
      let header = document.querySelector(".header-top");
      header.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { BtnUp };