import { useEffect } from "react";

import classNames from "classnames";

import { PopupCart } from "./PopupCart/PopupCart";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp";

import { InCart } from "./InCart/InCart";
import { Salary } from "./Salary/Salary";
import { Like } from "./Like/Like";

import { useShopCommonSelectors } from "../../selectors/shopSelectors"
import { useContentCategorySelectors } from "../../selectors/shopSelectors"

import { TypesCategoryProps } from './types'

import styles from '../../pageShop.module.scss'

export const ContentCategory = ({
  limit,
  handleClickLike,
  saveActive,
}: TypesCategoryProps) => {

  const { newData, discount, cart, setCartActiveItems } = useContentCategorySelectors()
  const { addInCart } = useShopCommonSelectors()

  const addActiveCarts = newData.map(item => {
    const foundItem = cart.find((item2) => item2.name === item.name)

    return foundItem ? { ...foundItem, active: true } : { ...item, active: false }
  })

  useEffect(() => {
    setCartActiveItems(addActiveCarts)
  }, [cart])

  return (
    <div className={styles.containerCategory}>
      {addInCart ? <PopupCart /> : null}
      {newData.slice(0, limit).map((item, i) => {
        return (
          <div
            className={classNames(styles.picture, item.salary ? styles.pictureInStock : styles.pictureSoldOut)}
            data-name={item.name}
            key={item.name}
          >
            <img className={styles.contentImage} src={item.sizes?.[0].url} alt={item.name} />
            <Like
              handleClickLike={handleClickLike}
              item={item}
              saveActive={saveActive} />
            <Salary
              item={item}
              discount={discount} />
            <div className={styles.name}>{item.name}</div>
            <InCart
              item={item}
              index={i} />
            <WhatsApp />
          </div>
        )
      })}
    </div>
  )
}





