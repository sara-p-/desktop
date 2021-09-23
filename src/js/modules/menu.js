export default function menu() {
  // Variables
  const nav = document.querySelector('nav')
  const submenu = document.querySelectorAll('.submenu')

  submenu.forEach((menu) => {
    const submenuButton = menu.querySelector('.submenu__button')
    // on 'click'
    submenuButton.addEventListener('click', (e) => {
      e.stopPropagation() // Stop the document-click function above from propagating
      menu.classList.toggle('submenu--active')
      nav.classList.toggle('nav--active')
    })

    // on 'hover'
    submenuButton.addEventListener('mouseenter', (e) => {
      if (nav.classList.contains('nav--active')) {
        submenu.forEach((menu) => {
          menu.classList.remove('submenu--active')
        })
        menu.classList.add('submenu--active')
      }
    })
  })

  // *************** Closing the Submenus on click outside of the menu ************* //
  // On click anywhere outside the submenu, close the submenu
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav--active')) {
      submenu.forEach((menu) => {
        menu.classList.remove('submenu--active')
      })
      nav.classList.remove('nav--active')
    }
  })
}
