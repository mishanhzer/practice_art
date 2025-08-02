import { TypesCartOrderInfo } from './types'

export const CartOrderInfo = ({ styles, amount, discount, salaryDiscount, salaryIncrease, salary }: TypesCartOrderInfo) => {
  return (
    <div>
      <div className={styles.cartOrderInfo}>
        <div>Товары, {amount} шт.</div>
        <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
      </div>
      {!discount ? <div className={styles.cartOrderInfo}>
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div> : null}
    </div>
  )
}