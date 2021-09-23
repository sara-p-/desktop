export default function menu() {
  // Variables
  const nav = document.querySelector('nav')
  const submenu = document.querySelectorAll('.submenu')

  // *************** Closing the Submenus on focus or click outside of the menu ************* //
  // On click anywhere outside the submenu, close the submenu
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('nav--active')) {
      submenu.forEach((menu) => {
        menu.classList.remove('submenu--active')
      })
      nav.classList.remove('nav--active')
    }
  })

  submenu.forEach((menu) => {
    const submenuButton = menu.querySelector('.submenu__button')
    // On Menu Item 'click', toggle 'active' class for the nav and submenu
    submenuButton.addEventListener('click', (e) => {
      e.stopPropagation() // Stop the document-click function above from propagating
      menu.classList.toggle('submenu--active')
      nav.classList.toggle('nav--active')
    })

    // If the nav is 'active', toggle the active classes for the submenus on hover
    submenuButton.addEventListener('mouseenter', (e) => {
      if (nav.classList.contains('nav--active')) {
        submenu.forEach((menu) => {
          menu.classList.remove('submenu--active')
        })
        menu.classList.add('submenu--active')
      }
    })
  })
}
