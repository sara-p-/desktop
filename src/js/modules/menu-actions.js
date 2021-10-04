import { htmlFolder } from './html-components'
export const folderList = document.querySelector('.section__items')

export function newFile() {
  // Variables
  const newFolderButton = document.querySelector('.nav-action__new-folder')

  // Functions
  newFolderButton.addEventListener('click', (e) => {
    folderList.append(htmlFolder())
  })
}

export function deleteTarget(target) {
  if (target.classList.contains('folder__image')) {
    target.parentElement.remove()
  } else {
    target.remove()
  }
}

export function duplicateTarget(target) {
  const newTarget = target.parentElement.cloneNode(true)
  return newTarget
}
