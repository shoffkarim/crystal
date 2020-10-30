class Cookie {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector('.cookie')) {
      let cookieAgree = document.querySelector('.btn-cookie.btn-cookie__agree');
      cookieAgree.addEventListener('click', function () {
        document.querySelector('.cookie').classList.remove('cookie__open');
      });
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { Cookie };