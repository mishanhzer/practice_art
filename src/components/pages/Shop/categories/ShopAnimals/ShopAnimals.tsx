import React, { useEffect, useState, useCallback, useMemo } from "react"
import { useStore } from '../../../../../store/store'

import { ButtonComponent } from "../../../../UI/LinkAndButton"
import { SubscribePanel } from '../../subcscribe/Subscribe'
import { Category } from "../Category"

import { PopupCart } from "../../popupCart/PopupCart"

import { dataShop } from "../../dataShop"

import styles from '../../shopAnimals.module.scss'

const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
const urlAnimalsShop = `${_apiUrl}${linkAnimals}&limit=100`

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)
  const setAddInCart = useStore(state => state.setAddInCart)

  const setTestData = useStore(state => state.setTestData)

  const loading = useStore(state => state.loading)

  const [limit, setLimit] = useState(9)

  const addInCart = useStore(state => state.addInCart)

  console.log(addInCart)

  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
    setTimeout(() => {
      setAddInCart(false)
    }, 3000)
  }, [])

  const commonData = dataShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  // useCallback(() => {
  //   setTestData(commonData)
  // }, [commonData])

  setTestData(commonData) // оставляю для теста

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
      {/* {addInCart ? <PopupCart text={'Товар добавлен в корзину'} /> : null} */}
      <SubscribePanel activeDiscount={activeDiscount} setActiveDiscount={setActiveDiscount} />
      <div className={styles.shopAnimalsContainer}>
        <Category
          commonData={commonData}
          limit={limit}
          handleClickLike={handleClickLike}
          saveActive={saveActive} />
        <ButtonComponent
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
export default ShopAnimals