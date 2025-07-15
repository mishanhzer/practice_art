import React from "react"
import 'reactjs-popup/dist/index.css';

import './changePopupStyle.scss'

import { ListItem } from "./navigateMenuItems/ListItem";
import { PopupItem } from "./navigateMenuItems/PopupItem";

import styles from './navigateMenu.module.scss'

const data = [
  { name: 'home', path: '/home', component: ListItem },
  { name: 'portfolio', path: '/portfolio', component: PopupItem },
  { name: 'about', path: '/about', component: ListItem },
  { name: 'contact', path: '/contact', component: ListItem },
  { name: 'shop', path: '/shop', component: ListItem },
]

export const NavigateMenu = () => {
  return (
    <ul className={`${styles.ulClass} group`}>
      {data.map((item, i) => <item.component key={i} name={item.name} path={item.path} />)}
    </ul>
  )
}


