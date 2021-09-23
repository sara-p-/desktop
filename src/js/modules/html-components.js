import folderSVG from '../../assets/images/folder.svg'

export function htmlFolder() {
  const folder = document.createElement('div')
  folder.classList.add('section__item', 'folder')

  const folderButton = document.createElement('button')
  folderButton.classList.add('folder__button')

  const folderImage = document.createElement('img')
  folderImage.classList.add('folder__image')
  folderImage.src = folderSVG
  folderImage.alt = 'folder'

  const folderTitle = document.createElement('input')
  folderTitle.classList.add('folder__title')
  folderTitle.type = 'text'
  folderTitle.value = 'Untitled'

  folderButton.append(folderImage)
  folderButton.append(folderTitle)
  folder.append(folderButton)

  return folder
}
