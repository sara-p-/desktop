import { htmlFolder } from './html-components'

export default function newFile() {
  // Variables
  const newFolderButton = document.querySelector('.nav-action__new-folder')
  const FolderList = document.querySelector('.section__items')

  // Functions
  newFolderButton.addEventListener('click', (e) => {
    FolderList.append(htmlFolder())
  })
}
