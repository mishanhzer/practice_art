import React, { useEffect, useState } from "react"

import { Button } from "../../../../UI/Button/Button"
import { SubscribePanel } from '../SubscribePanel/SubscribePanel'
import { ContentCategory } from "../ContentCategory/ContentCategory"
import { PopupCart } from "../ContentCategory/PopupCart/PopupCart"

import { usePeopleAndAnimals, useGetData, useSetAddInCart, useSetNewData, useLoading, useAddInCart } from "../../selectors/shopSelectors"

import { peopleAndAnimalsShop } from "../../constants"
import { urlPeopleAndAnimalsShop } from './constants'

import styles from '../../pageShop.module.scss'

const PagePeopleAndAnimals = () => {
  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)
  const [limit, setLimit] = useState(9)

  const peopleAndAnimals = usePeopleAndAnimals()
  const getData = useGetData()
  const setAddInCart = useSetAddInCart()
  const setNewData = useSetNewData()
  const loading = useLoading()
  const addInCart = useAddInCart()

  useEffect(() => {
    getData('stillLife', urlPeopleAndAnimalsShop, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals')
    setTimeout(() => {
      setAddInCart(false)
    }, 2700)
  }, [])

  const commonData = peopleAndAnimalsShop.map((item2) => {
    const item1 = peopleAndAnimals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  // useCallback(() => {
  //   setTestData(commonData)
  // }, [commonData])

  setNewData(commonData) // оставляю для теста

  const handleClick = () => {
    setLimit(limit + 9)
    getData('stillLife', urlPeopleAndAnimalsShop, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals')
  }

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')!
    const changeActive = (boolean: boolean) => setSaveActive((prevArrTest) => ({ ...prevArrTest, [active]: boolean }))
    saveActive[active] ? changeActive(false) : changeActive(true)
  }

  return (
    <div>
      {addInCart ? <PopupCart /> : null}
      <SubscribePanel activeDiscount={activeDiscount} setActiveDiscount={setActiveDiscount} />
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
export default PagePeopleAndAnimals