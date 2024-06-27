export function scrollToTop (to, from, next) {
  // Перемещаем страницу в начало
  window.scrollTo(0, 0);
  next();
}
