import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import 'reactjs-popup/dist/index.css';

import { TypesMenuItem } from '../types'
import styles from '../navigationMenu.module.scss'

export const MenuItem = ({ name, path }: TypesMenuItem) => {
  return (
    <li
      className={`flex ${styles.menuItem} relative`}
    >
      <NavLink
        to={path}
        className={({ isActive }) => isActive
          ? classNames(styles.activeMenuItem, styles.underlineAnimation)
          : classNames(styles.underlineAnimation, `border-none`)}
      >
        {name}
      </NavLink>
    </li>
  )
}
