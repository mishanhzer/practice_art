import React, { useState, useEffect } from "react";

import { PopupCart } from "./PopupCart/PopupCart"
import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";

import { CartForm } from "./CartForm/CartForm";
import { CartOrder } from "./CartOrder/CartOrder";
import { CartEmpty } from "./CartEmpty/CartEmpty";

import { useCartPageSelector } from "./selectors/cartPageSelector"

import styles from './cart.module.scss'

const PageCart = () => {
  const [viewDeleteBtn, setViewDeleteBtn] = useState(false)
  const dataPageCart = useCartPageSelector()

  useEffect(() => {
    dataPageCart.deleteDuplicatePicture()
  }, [])

  return (
    <>
      {dataPageCart.addInCart ? <PopupCart /> : null}
      <div className={styles.cartContainer}>
        {dataPageCart.cart.length ?
          <>
            <CartForm picturesCart={dataPageCart.picturesCart} getDeleteTest={dataPageCart.getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} discount={dataPageCart.discount} />
            <CartOrder styles={styles} discount={dataPageCart.discount} />
          </> : <CartEmpty styles={styles} />}
        <WhatsApp />
      </div>
    </>
  )
}

export default PageCart