class Validation {
  constructor() {
    this.handler();
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  handler() {
    let blocks = document.querySelectorAll(".callback-form__block");
    blocks.forEach(function (block) {
      let input = block.querySelector(".js-anim");
      let label = block.querySelector("label");
      input.addEventListener("focus", function () {
        label.style.display = "none";
      });
      input.addEventListener("blur", function () {
        if (input.value === "") {
          label.style.display = "block";
        }
      });
      label.addEventListener("click", function () {
        input.focus();
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  init() {
    if (document.querySelector(".btn-form")) {
      let btnSubmit = document.querySelector(".btn-form");
      btnSubmit.addEventListener("click", function (e) {
        let validList = document.querySelectorAll(".js-valid[data-req=true]");
        validList.forEach(function (i) {
          let value = i.value;
          let type = i.getAttribute("type");
          switch (type) {
            case "tel":
              // eslint-disable-next-line no-case-declarations, no-useless-escape
              let regTel = new RegExp(
                // eslint-disable-next-line no-useless-escape
                /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
              );
              if (!regTel.test(value)) {
                i.classList.add("error");
                i.classList.remove("good");
                e.preventDefault();
              } else {
                i.classList.add("good");
                i.classList.remove("error");
              }
              break;
            case "text":
              // eslint-disable-next-line no-case-declarations
              let regText = new RegExp(/^[а-яА-ЯёЁ]/);
              if (!regText.test(value)) {
                i.classList.add("error");
                i.classList.remove("good");
                e.preventDefault();
              } else {
                i.classList.add("good");
                i.classList.remove("error");
              }
              break;
            case "email":
              // eslint-disable-next-line no-case-declarations
              let regEmail = new RegExp(/@/);
              if (!regEmail.test(value)) {
                i.classList.add("error");
                i.classList.remove("good");
                e.preventDefault();
              } else {
                i.classList.add("good");
                i.classList.remove("error");
              }
              break;
            case "checkbox":
              // eslint-disable-next-line no-case-declarations, no-useless-escape
              let check = i.checked;
              if (!check) {
                i.classList.add("error");
                i.classList.remove("good");
                e.preventDefault();
              } else {
                i.classList.add("good");
                i.classList.remove("error");
              }
              break;
            default:
              break;
          }
      });
    });
  }
  }
}
// eslint-disable-next-line import/prefer-default-export
export { Validation };