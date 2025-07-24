import { NavLink } from "react-router"

import { textHeader, textDescr, textLink } from './constants'

import { TypesCartEmpty } from './types'

import emptyCart from '../../../../assets/images/cartImage/emptyCart.jpg'

export const CartEmpty = ({ styles }: TypesCartEmpty) => {
  return (
    <div className={styles.cartEmptyContainer}>
      <div className={styles.cartEmptyImg}>
        <img src={emptyCart} alt="emptyCart" />
      </div>
      <h2 className={styles.cartEmptyHeader}>{textHeader}</h2>
      <div className={styles.cartEmptyDescr}>{textDescr}</div>
      <NavLink
        to="/shop"
        className={styles.cartEmptyButton}>
        {textLink}
      </NavLink>
    </div>
  )
}
