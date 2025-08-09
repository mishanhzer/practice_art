import React, { useEffect, useState, useCallback } from "react"

import { Button } from "../../../../UI/Button/Button"
import { ContentCategory } from "../ContentCategory/ContentCategory"
import { SubscribePanel } from '../SubscribePanel/SubscribePanel'
import { PopupCart } from "../ContentCategory/PopupCart/PopupCart"

import { useCategorySelectors, useShopCommonSelectors } from '../../selectors/shopSelectors'

import { animalsShop } from '../../constants'
import { urlAnimalsShop } from './constants'

import styles from '../../pageShop.module.scss'

const PageAnimals = () => {
  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)
  const [limit, setLimit] = useState(9)

  const { animals } = useCategorySelectors()
  const { getData, setAddInCart, setNewData, addInCart } = useShopCommonSelectors()

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
    setTimeout(() => {
      setAddInCart(false)
    }, 3000)
  }, [])

  const commonData = animalsShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  // useCallback(() => {
  //   setTestData(commonData)
  // }, [commonData])

  setNewData(commonData) // оставляю для теста

  const handleClick = () => {
    setLimit(limit + 9)
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')!
    const changeActive = (boolean: boolean) => setSaveActive((prevArrTest) => ({ ...prevArrTest, [active]: boolean }))
    saveActive[active] ? changeActive(false) : changeActive(true)
  }

  return (
    <div>
      {addInCart ? <PopupCart /> : null}
      <SubscribePanel
        activeDiscount={activeDiscount}
        setActiveDiscount={setActiveDiscount} />
      <div className={styles.categoryContainer}>
        <ContentCategory
          commonData={commonData}
          limit={limit}
          handleClickLike={handleClickLike}
          saveActive={saveActive} />
        <Button
          disabled={limit > commonData.length ? true : false}
          mt='mt-3'
          h='h-16'
          fz='text-[16px]'
          textBtn="Загрузить еще"
          mx='mx-auto'
          turn='rotate-90'
          translateX='translate-x-0'
          func={handleClick} />
      </div>
    </div >
  )
}
export default PageAnimals