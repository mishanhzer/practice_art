import { CartOrderInfo } from './CartOrderInfo/CartOrderInfo'
import { CartOrderTotal } from './CartOrderTotal/CartOrderTotal'

import { TypesCartOrder } from './types'

export const CartOrder = ({ picturesCart, styles, discount }: TypesCartOrder) => {
  const amount = picturesCart.map(item => item.amount).reduce((a: number, b: number) => a + b, 0)
  const salary = picturesCart.map(item => item.salary).reduce((a: number, b: number) => a + b, 0)
  const salaryDiscount = salary
  const salaryIncrease = salary + salary * 0.2

  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <CartOrderInfo
        styles={styles}
        amount={amount}
        discount={discount}
        salaryDiscount={salaryDiscount}
        salaryIncrease={salaryIncrease}
        salary={salary} />
      <CartOrderTotal
        styles={styles}
        discount={discount}
        salaryDiscount={salaryDiscount}
        salaryIncrease={salaryIncrease} />
      <button className={styles.cartOrderButton}>Заказать</button>
    </div>
  )
}