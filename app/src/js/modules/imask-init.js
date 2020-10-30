class InputMask {
  constructor() {
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    let element = document.querySelector('.tel-mask');
    let maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    // eslint-disable-next-line no-undef, no-unused-vars
    let mask = IMask(element, maskOptions);
  }
}

export {InputMask}