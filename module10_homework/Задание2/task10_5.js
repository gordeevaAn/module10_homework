const btn = document.querySelector('.btn');
//const width = window.screen.width;
//const height = window.screen.height;

btn.onclick = function () {
  alert(
    `Ширина экрана: ${window.screen.width} Высота экрана: ${window.screen.height}`);
}