import { useState, useEffect } from "react"
import { NavLink } from "react-router"

import { ButtonCart } from "./ButtonCart/ButtonCart"
import { CartInBtn } from "./CartInBtn/CartInBtn"

import { useInCartSelectors } from "../../../selectors/shopSelectors"
import { useShopCommonSelectors } from "../../../selectors/shopSelectors"

import { TypesData } from "../../../types"

import styles from '../../../pageShop.module.scss'

export const InCart = ({ item, index }: { item: TypesData, index: number }) => {
  const [activeCart, setActiveCart] = useState(false)
  const [btnId, setBtnId] = useState(0)

  const {
    getPictureCart,
    getPicturesCart,
    deleteDuplicatePicture,
    testCart,
    picturesCart,
    setCartTest
  } = useInCartSelectors()
  const { setAddInCart } = useShopCommonSelectors()

  const obj = testCart.reduce((acc, value, index) => {
    acc[index] = value
    return acc
  }, {})

  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].active
  })

  useEffect(() => {
    setCartTest(picturesCart)
  }, [picturesCart])

  const testClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const activeBtn = +e.currentTarget.getAttribute('data-id')!
    setBtnId(activeBtn)
    setActiveCart(!activeCart)

    if (e.currentTarget) {
      setAddInCart(true)
      getPictureCart(item)
      getPicturesCart()
      deleteDuplicatePicture()
    }

    setTimeout(() => {
      setAddInCart(false)
    }, 2700)
  }

  return (
    <div className={item.salary ? styles.inCartContainer : 'hidden'}>
      {obj[index] ?
        <NavLink to='/cart' className={styles.inCartActive}>
          <ButtonCart item={item} testClick={testClick} btnText={'В корзине'} img={() => null} />
        </NavLink> :
        <ButtonCart item={item} testClick={testClick} btnText={'В корзину'} style={styles.inCart} img={() => <CartInBtn />} />
      }
    </div>
  )
}