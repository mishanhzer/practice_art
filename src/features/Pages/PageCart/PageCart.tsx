import React, { useState, useEffect } from "react";

import { useStore } from "../../../store/store";

import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";
import { PopupCart } from "./PopupCart/PopupCart"

import { CartOrder } from "./CartOrder/CartOrder";
import { CartEmpty } from "./CartEmpty/CartEmpty"
import { CartForm } from "./CartForm/CartForm";

import styles from './cart.module.scss'

const PageCart = () => {
  const picturesCart = useStore(state => state.picturesCart)
  const cart = useStore(state => state.cart)
  const discount = useStore(state => state.discount)

  const getDeleteTest = useStore(state => state.getDeleteTest)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const addInCart = useStore(state => state.addInCart)

  const [viewDeleteBtn, setViewDeleteBtn] = useState(false)

  useEffect(() => {
    deleteDuplicatePicture()
  }, [])

  return (
    <>
      {addInCart ? <PopupCart /> : null}
      <div className={styles.cartContainer}>
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








// import React, { useState, useEffect } from "react";

// import { useStore } from '../../../store/store'

// import { PopupCart } from "./PopupCart/PopupCart"
// import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp";

// import { CartForm } from "./CartForm/CartForm";
// import { CartOrder } from "./CartOrder/CartOrder";
// import { CartEmpty } from "./CartEmpty/CartEmpty";

// import { useCartPageSelector, useDiscount, useCart, useGetDeleteTest } from "./selectors/cartPageSelector"

// import styles from './cart.module.scss'

// const PageCart = () => {
//   const [viewDeleteBtn, setViewDeleteBtn] = useState(false)
//   const cartPageSelectors = useCartPageSelector()
//   const picturesCart = useStore(state => state.picturesCart)
//   const cart = useCart()
//   const discount = useDiscount()
//   const getDeleteTest = useGetDeleteTest()
//   const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

//   useEffect(() => {
//     deleteDuplicatePicture()
//   }, [])

//   console.log(picturesCart)

//   return (
//     <>
//       {cartPageSelectors.addInCart ? <PopupCart /> : null}
//       <div className={styles.cartContainer}>
//         {cart.length ?
//           <>
//             <CartForm picturesCart={picturesCart} getDeleteTest={getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} discount={discount} />
//             <CartOrder picturesCart={picturesCart} styles={styles} discount={discount} />
//           </> : <CartEmpty styles={styles} />}
//         <WhatsApp />
//       </div>
//     </>
//   )
// }

// export default PageCart