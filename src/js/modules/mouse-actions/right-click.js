import { mousePosition } from '../helper-functions'

export default function rightClick() {
  // Variables
  const customMenu = document.querySelector('nav.nav-custom')
  let customTarget

  document.addEventListener('click', (e) => {
    customMenu.classList.remove('nav-custom--active')
  })

  if (document.addEventListener) {
    document.addEventListener(
      'contextmenu',
      function (e) {
        e.stopPropagation()
        customTarget = e.target
        let mouseCoords = mousePosition(e)
        customMenu.classList.add('nav-custom--active')
        customMenu.style.top = mouseCoords[1].toString() + 'px'
        customMenu.style.left = mouseCoords[0].toString() + 'px'
        e.preventDefault()
      },
      false
    )
  } else {
    document.attachEvent('oncontextmenu', function () {
      window.event.returnValue = false
    })
  }
}
