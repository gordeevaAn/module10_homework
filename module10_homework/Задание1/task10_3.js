document.querySelector('.svg_btn').addEventListener('click', function (e) {
  e.target.closest('.svg_btn').classList.toggle('svg_btn--toggle');
});