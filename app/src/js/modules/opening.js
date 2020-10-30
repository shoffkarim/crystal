class Opening {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(() => {
        document.querySelector(".opening").classList.remove("opening");
      }, 1000);
    });
    window.addEventListener("scroll", function () {
      let cH = document.documentElement.clientHeight;
      if (window.pageYOffset > cH - 400) {
        document.querySelector('.btn-up').classList.remove('btn-up__hidden');
      }
      if (window.pageYOffset < cH - 400) {
        document.querySelector('.btn-up').classList.add('btn-up__hidden');
      }
      if ((window.pageYOffset > cH - 400) && document.querySelector('.catalog')) {
        document.querySelector('.catalog').classList.remove('opening');
      }
      if ((window.pageYOffset > cH + 1100) && document.querySelector('.company')) {
        document.querySelector('.company').classList.remove('opening');
      }
    });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Opening };