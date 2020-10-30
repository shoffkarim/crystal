const catalogSelect = (function () {
  document.addEventListener('DOMContentLoaded', function () {
      let choicesWhite = document.querySelectorAll(".js-choices");
      for (let i = 0; i < choicesWhite.length; ++i) {
          let choicesItem = choicesWhite[i];
          // eslint-disable-next-line no-new, no-undef
          new Choices(choicesItem, {
              searchEnabled: false,
              resetScrollPosition: true,
          });
      }
  });
}());

export default catalogSelect;