import { deleteTarget } from './menu-actions'

export default function customMenu() {
  const customNav = document.querySelector('nav.nav-custom')
  const navDelete = document.querySelector('.nav-action__delete')

  // Stop the propagation of the document-click event that closes the custom menu
  customNav.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  // Delete action
  navDelete.addEventListener('click', (e) => {})
}
