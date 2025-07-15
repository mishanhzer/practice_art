import { MenuItem } from './MenuItem/Menutem'
import { PopupItem } from './PopupItem/PopupItem'

export const dataMenu = [
  { name: 'home', path: '/home', component: MenuItem },
  { name: 'portfolio', path: '/portfolio', component: PopupItem },
  { name: 'about', path: '/about', component: MenuItem },
  { name: 'contact', path: '/contact', component: MenuItem },
  { name: 'shop', path: '/shop', component: MenuItem },
]