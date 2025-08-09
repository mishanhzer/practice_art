import { useState, useEffect } from "react";

import { useCartPageSelectors } from "./selectors/cartPageSelector";

import { TitlePage } from "../TitlePage/TitlePage";
import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";
import { PopupCart } from "./PopupCart/PopupCart"

import { CartOrder } from "./CartOrder/CartOrder";
import { CartEmpty } from "./CartEmpty/CartEmpty"
import { CartForm } from "./CartForm/CartForm";

import styles from './cart.module.scss'

const PageCart = () => {
  const [viewDeleteBtn, setViewDeleteBtn] = useState<number | undefined>(0)

  const {
    picturesCart,
    cart,
    discount,
    getDeleteTest,
    deleteDuplicatePicture,
    addInCart
  } = useCartPageSelectors()

  useEffect(() => {
    deleteDuplicatePicture()
  }, [])

  return (
    <>
      <TitlePage name='Корзина' content='Page for buy pictures' />
      {addInCart ? <PopupCart /> : null}
      <div className={styles.container}>
        {cart.length ?
          <>
            <CartForm picturesCart={picturesCart} getDeleteTest={getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} discount={discount} />
            <CartOrder picturesCart={cart} discount={discount} styles={styles} />
          </> : <CartEmpty styles={styles} />}
        <WhatsApp />
      </div>
    </>
  )
}

export default PageCart
