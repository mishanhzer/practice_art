import React, { useState, useEffect } from "react";

import { useStore } from "../../../store/store";

import { usePicturesCartSelector, useCartSelector, useDiscountSelector, useGetDeleteSelector, useDeleteDuplicatePictureSelector, useAddInCartSelector } from './selectors/cartPageSelector'

import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";
import { PopupCart } from "./PopupCart/PopupCart"

import { CartOrder } from "./CartOrder/CartOrder";
import { CartEmpty } from "./CartEmpty/CartEmpty"
import { CartForm } from "./CartForm/CartForm";

import styles from './cart.module.scss'

const PageCart = () => {
  const [viewDeleteBtn, setViewDeleteBtn] = useState<number | undefined>(0)

  const picturesCart = usePicturesCartSelector()
  const cart = useCartSelector()
  const discount = useDiscountSelector()
  const getDeleteTest = useGetDeleteSelector()
  const deleteDuplicatePicture = useDeleteDuplicatePictureSelector()
  const addInCart = useAddInCartSelector()

  // const picturesCart = useStore(state => state.picturesCart)
  // const cart = useStore(state => state.cart)
  // const discount = useStore(state => state.discount)
  // const getDeleteTest = useStore(state => state.getDeleteTest)
  // const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)
  // const addInCart = useStore(state => state.addInCart)

  useEffect(() => {
    deleteDuplicatePicture()
  }, [])

  return (
    <>
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
