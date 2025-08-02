import { TypesCartOrderTotal } from './types'

export const CartOrderTotal = ({ styles, discount, salaryDiscount, salaryIncrease }: TypesCartOrderTotal) => {
  return (
    <div className={styles.cartOrderTotal}>
      <div>Итого</div>
      <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
    </div>
  )
}