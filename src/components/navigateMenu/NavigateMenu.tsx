import React from "react"
import 'reactjs-popup/dist/index.css';

import './styles/changePopupStyle.scss'

import { ListItem, PopupItem } from "./ListItem";
import { ulClass } from "./styles/activeClassListItem";

export const NavigateMenu = () => {
  return (
    <ul className={ulClass}>
      <ListItem name='home' path='/home' />
      <PopupItem name='portfolio' path='/portfolio' />
      <ListItem name='about' path='/about' />
      <ListItem name='contact' path='/contact' />
      <ListItem name='shop' path='/shop' />
    </ul>
  )
}


