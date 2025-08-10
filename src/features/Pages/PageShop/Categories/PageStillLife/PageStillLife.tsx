import { useEffect, useState } from "react"

import { Button } from "../../../../UI/Button/Button"
import { SubscribePanel } from '../SubscribePanel/SubscribePanel'
import { ContentCategory } from "../ContentCategory/ContentCategory"

import { useCategorySelectors, useShopCommonSelectors } from '../../selectors/shopSelectors'

import { stillLifeShop } from '../../constants'
import { urlStillLifeShop } from './constants'

import styles from '../../pageShop.module.scss'

const PageStillLife = () => {
  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)
  const [limit, setLimit] = useState(9)

  const { stillLife } = useCategorySelectors()
  const { getData, setNewData, setAddInCart, addInCart } = useShopCommonSelectors()

  useEffect(() => {
    getData('stillLife', urlStillLifeShop, 'offsetStillLife', 0, 'pageStillLife')
    setTimeout(() => {
      setAddInCart(false)
    }, 2700)
  }, [])

  const commonData = stillLifeShop.map((item2) => {
    const item1 = stillLife.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  // useCallback(() => {
  //   setTestData(commonData)
  // }, [commonData])

  setNewData(commonData) // оставляю для теста

  const handleClick = () => {
    setLimit(limit + 9)
    getData('stillLife', urlStillLifeShop, 'offsetStillLife', 0, 'pageStillLife')
  }

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')!
    const changeActive = (boolean: boolean) => setSaveActive((prevArrTest) => ({ ...prevArrTest, [active]: boolean }))
    saveActive[active] ? changeActive(false) : changeActive(true)
  }

  return (
    <div>
      <SubscribePanel activeDiscount={activeDiscount} setActiveDiscount={setActiveDiscount} />
      <div className={styles.categoryContainer}>
        <ContentCategory
          commonData={commonData}
          limit={limit}
          handleClickLike={handleClickLike}
          saveActive={saveActive} />
        <Button
          disabled={limit >= commonData.length ? true : false}
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
export default PageStillLife