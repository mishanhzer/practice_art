import { useState, useEffect } from 'react'

import { CartInfoPictures } from './CartInfoPictures/CartInfoPictures'
import { CartCounter } from './CartCounter/CartCounter'
import { CartSalary } from './CartSalary/CartSalary'
import { CartAmount } from './CartAmount/CartAmount'

import { useSetCart, useCartMain, useSetAddInCart, useAddInCart, useGetDeleteItemCart, useAddProperty, useCommonSelector } from '../selectors/cartFormSelector'

import { TypesCartForm } from './types'
import { TypesPictureCart, TypeEvent, TypeFuncOperation } from '../types'

import styles from '../cart.module.scss'

export const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn, discount }: TypesCartForm) => {
  const [oldSalary, setOldSalary] = useState(0)
  const [cartId, setCartId] = useState(0)
  const [btnId, setBtnId] = useState(0)
  const [activeLike, setActiveLike] = useState(false)
  const [cart, setCart] = useState(picturesCart);

  const commonSelectors = useCommonSelector() // для теста

  const setCartTest = useSetCart()
  const setAddInCart = useSetAddInCart()
  const getDeleteItemCart = useGetDeleteItemCart()
  const cartMain = useCartMain()

  useEffect(() => { // отвечает за увеличение количества товара в корзине
    setCartTest(cart)
  }, [cart])

  useEffect(() => { // запоминает количество добавленных товаров
    setCartTest(cartMain)
  }, [cartMain])

  useEffect(() => { // отвечает за удаление товара из корзины
    setCart(cartMain)
  }, [picturesCart.length])

  const handleTestClick = (e: TypeEvent) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)

    setViewDeleteBtn(elem)
    setAddInCart(true)

    getDeleteItemCart(elem)

    setTimeout(() => {
      setAddInCart(false)
    }, 3000)
  }

  const handleLikeClick = (e: TypeEvent) => {
    const activeBtn = +e.currentTarget.getAttribute('data-btn')!
    setBtnId(activeBtn)
    setActiveLike(!activeLike)
  }

  const handleIncreaseSalary = (e: TypeEvent, pictureSalary: number, value: number, operation: TypeFuncOperation = (a, b) => (a + b)) => {
    const cartPictureId = +e.currentTarget.getAttribute('data-id')!
    setCartId(cartPictureId)

    const selectedPicture: TypesPictureCart | undefined = picturesCart.find(item => item.id === cartPictureId)
    if (selectedPicture && selectedPicture.salary !== undefined) {
      const newSalary = operation(pictureSalary, selectedPicture.salary)
      setOldSalary(selectedPicture.salary)
      const newCart = cartMain.map((item) => {
        if (item.id === cartPictureId) {
          return { ...item, amount: item.amount + value, salary: newSalary };
        }
        return item;
      });
      setCart(newCart);
    }
  }

  return (
    <div className={styles.cartFormContainer}>
      <h1 className={styles.cartFormHeader}>Корзина</h1>
      <CartAmount styles={styles} cart={cart} />
      {cartMain.map((picture) => {
        return (
          <div key={picture.id} className={styles.cartFormPictureContainer}>
            <div className={styles.cartFormPictureWrapper}>
              <CartInfoPictures
                styles={styles}
                picture={picture}
                handleLikeClick={handleLikeClick}
                activeLike={activeLike}
                handleTestClick={handleTestClick}
                btnId={btnId} />
              <CartCounter
                styles={styles}
                picture={picture}
                handleIncreaseSalary={handleIncreaseSalary}
                cartId={cartId} />
              <CartSalary
                styles={styles}
                picture={picture}
                discount={discount} />
            </div>
          </div>
        )
      })
      }
    </div >)
}

// export const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn, discount }) => {
//   const [oldSalary, setOldSalary] = useState(0)
//   const [cart, setCart] = useState(picturesCart);

//   const [cartId, setCartId] = useState(0)
//   const [btnId, setBtnId] = useState(0)
//   const [activeLike, setActiveLike] = useState(false)

//   const cartFormSelectors = useCartFormSelector()
//   const cartMain = useCartMain()
//   const setCartTest = useSetCartTest()

//   useEffect(() => { // отвечает за увеличение количества товара в корзине
//     setCartTest(cart)
//   }, [cart])

//   useEffect(() => { // запоминает количество добавленных товаров
//     setCartTest(cartMain)
//   }, [cartMain])

//   useEffect(() => { // отвечает за удаление товара из корзины
//     setCart(cartFormSelectors.cartMain)
//   }, [picturesCart.length])

//   const handleTestClick = (e: TypeEvent) => {
//     const elem = +e.currentTarget.getAttribute('data-id')!
//     getDeleteTest(elem)
//     setViewDeleteBtn(elem)

//     cartFormSelectors.setAddInCart(true)

//     cartFormSelectors.getDeleteItemCart(elem)

//     setTimeout(() => {
//       cartFormSelectors.setAddInCart(false)
//     }, 3000)
//   }

//   const handleLikeClick = (e: TypeEvent) => {
//     const activeBtn = +e.currentTarget.getAttribute('data-btn')!
//     setBtnId(activeBtn)
//     setActiveLike(!activeLike)
//   }

//   const handleIncreaseSalary = (e: TypeEvent, pictureSalary: number, value: number, operation: TypeFuncOperation = (a, b) => (a + b)) => {
//     const cartPictureId = +e.currentTarget.getAttribute('data-id')!
//     setCartId(cartPictureId)

//     const selectedPicture: TypesPictureCart = picturesCart.find(item => item.id === cartPictureId)
//     if (selectedPicture && selectedPicture.salary !== undefined) {
//       const newSalary = operation(pictureSalary, selectedPicture.salary)
//       setOldSalary(selectedPicture.salary)
//       const newCart = cartMain.map((item) => {
//         if (item.id === cartPictureId) {
//           return { ...item, amount: item.amount + value, salary: newSalary };
//         }
//         return item;
//       });
//       setCart(newCart);
//     }
//   }

//   return (
//     <div className={styles.cartFormContainer}>
//       <h1 className={styles.cartFormHeader}>Корзина</h1>
//       <h2 className={styles.cartFormAmountPicture}>
//         {cart.length} картин{cart.length % 10 === 1 && cart.length % 100 !== 11 ? 'а' : cart.length % 10 >= 2 && cart.length % 10 <= 4 && (cart.length % 100 < 10 || cart.length % 100 >= 20) ? 'ы' : ''}
//       </h2>
//       {cartFormSelectors.cartMain.map((picture) => {
//         return (
//           <div key={picture.id} className={styles.cartFormPictureContainer}>
//             <div className={styles.cartFormPictureWrapperItems}>
//               <CartInfoPictures
//                 styles={styles}
//                 picture={picture}
//                 handleLikeClick={handleLikeClick}
//                 activeLike={activeLike}
//                 handleTestClick={handleTestClick}
//                 btnId={btnId} />
//               <CartCounter
//                 styles={styles}
//                 picture={picture}
//                 handleIncreaseSalary={handleIncreaseSalary}
//                 cartId={cartId} />
//               <CartSalary
//                 styles={styles}
//                 picture={picture}
//                 discount={discount} />
//             </div>
//           </div>
//         )
//       })
//       }
//     </div >
//   )
// }