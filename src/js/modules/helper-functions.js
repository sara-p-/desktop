export function mousePosition(e, element) {
  element.classList.add('nav-custom--active')
  element.style.top = e.clientY.toString() + 'px'
  element.style.left = e.clientX.toString() + 'px'
}
