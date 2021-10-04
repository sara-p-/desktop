import { deleteTarget, duplicateTarget, folderList } from './menu-actions'
import { mousePosition } from './helper-functions'

export default function theCustomMenu() {
  // Variables
  const customMenu = document.querySelector('nav.nav-custom')
  const deleteButton = document.querySelector('.nav-action__delete')
  const duplicateButton = document.querySelector('.nav-action__duplicate')
  let clickTarget

  // Close the custom menu when the user clicks anywhere outside of it
  document.addEventListener('click', (e) => {
    customMenu.classList.remove('nav-custom--active')
  })
  // Stop the propagation of the document-click event that closes the custom menu
  customMenu.addEventListener('click', (e) => {
    e.stopPropagation()
  })

  // Open and position the custom menu, as well as set the variable for the event target
  if (document.addEventListener) {
    document.addEventListener(
      'contextmenu',
      function (e) {
        e.stopPropagation()
        e.preventDefault()
        mousePosition(e, customMenu) // Position the custom menu based on the position of the mouse
        clickTarget = e.target
        customMenu.classList.remove('target-folder')
        if (clickTarget.classList.contains('folder__image')) {
          customMenu.classList.add('target-folder')
        }
      },
      false
    )
  } else {
    document.attachEvent('oncontextmenu', function () {
      window.event.returnValue = false
    })
  }

  // Deleting the target
  deleteButton.addEventListener('click', (e) => {
    deleteTarget(clickTarget)
    customMenu.classList.remove('nav-custom--active')
  })

  // Duplicating the target folder
  duplicateButton.addEventListener('click', (e) => {
    folderList.append(duplicateTarget(clickTarget))
    customMenu.classList.remove('nav-custom--active')
  })
}
