import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

import { PortoflioLinks } from './PortfolioLinks/PortfilioLinks';

import { initialValueRef } from './constants'

import { TypesMenuItem } from '../types';

import 'reactjs-popup/dist/index.css';
import styles from '../navigationMenu.module.scss'

import { arrowPages } from '../../../../assets/logo/logo'

export const PopupItem = ({ name, path }: TypesMenuItem) => {
  const ref = useRef<PopupActions>(initialValueRef);
  return (
    <Popup
      ref={ref}
      closeOnDocumentClick
      on='hover'
      trigger={<li className={`flex ${styles.menuItem} relative`}>
        <NavLink
          to={path}
          className={({ isActive }) => isActive
            ? classNames(styles.activeMenuItem, styles.underlineAnimation, `flex`)
            : classNames(styles.underlineAnimation, `flex border-none`)}
        >
          {name}
          <img className={styles.popupImg} src={arrowPages} alt="#" />
        </NavLink>
      </li>}
      position="bottom center">
      <PortoflioLinks ref={ref} />
    </Popup>
  )
}