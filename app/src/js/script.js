/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

// sass =======
import "../stylus/style.styl";

// choices =========
import { catalogSelect } from "./modules/choices-init";

import { InputMask } from "./modules/imask-init";
import { Validation } from "./modules/validation";
import { PopUpCallback } from "./modules/popupCallback";
import { Opening } from "./modules/opening";
import { Cookie } from "./modules/cookie";
import { Burger } from "./modules/burger";
import { BtnUp } from "./modules/btnUp";
import { TextImg } from "./modules/textImg";

// для нормальной отрисовки текста на главной
if (document.querySelector(".text-img")) {
  setTimeout(() => {
    let textImg = document.querySelectorAll(".text-img");
    textImg.forEach(function (i) {
      i.style.zIndex = "11";
    });
  }, 500);
}

// mask ======
let inputMask = new InputMask();
// validation ======
let valid = new Validation();
// popup ======
let popup = new PopUpCallback();
// opening ======
let open = new Opening();
// cookie =====
let cookie = new Cookie();
// cookie =====
let burger = new Burger();
// btnUp =====
let buttonUp = new BtnUp();
// textImg =====
let txtImg = new TextImg();