import '../scss/style.scss'

import menu from './modules/menu'
import { newFile } from './modules/menu-actions'
import theCustomMenu from './modules/custom-menu'
import folderEvents from './modules/folder-events'
import finderEvents from './modules/finder-events'

menu()
newFile()
// theCustomMenu()
folderEvents()
finderEvents()
