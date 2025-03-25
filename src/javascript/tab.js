document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".A-MainPageButton");
  const contents = document.querySelectorAll(".M-Hero-Cards");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Убираем активный класс у всех кнопок
      buttons.forEach((btn) => btn.classList.remove("A-Active-PageButton"));
      this.classList.add("A-Active-PageButton");

      // Скрываем все блоки с контентом
      contents.forEach((content) => {
        content.style.display = "none";
      });

      // Показываем нужный блок
      const targetId = this.getAttribute("data-tab");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        targetContent.style.display = "inline flex"; // Меняем `display` под твой макет
      }
    });
  });
});
