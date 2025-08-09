import { NavLink } from "react-router";

import { BasketImage } from "./BasketImage/BasketImage"

import { useBasketSelector } from '../../selectors/basketSelector'

import { BasketProps } from "./types"

import styles from '../../header.module.scss'

export const Basket = ({ className }: BasketProps) => {
  const picturesCart = useBasketSelector()

  return (
    <NavLink to="/cart" className="relative">
      <BasketImage className={className} />
      {picturesCart.length ?
        <div className={styles.amount}>
          {picturesCart.length}
        </div> : null}
    </NavLink>
  );
};
