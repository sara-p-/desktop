import { htmlFolder } from '../html-components'

export function newFile() {
  // Variables
  const newFolderButton = document.querySelector('.nav-action__new-folder')
  const FolderList = document.querySelector('.section__items')

  // Functions
  newFolderButton.addEventListener('click', (e) => {
    FolderList.append(htmlFolder())
  })
}

export function deleteTarget(target) {
  if (target.classList.contains('folder__image')) {
    target.parentElement.remove()
  } else {
    target.remove()
  }
}
