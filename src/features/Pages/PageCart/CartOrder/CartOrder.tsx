import { TypesCartOrder } from './types'

export const CartOrder = ({ picturesCart, styles, discount }: TypesCartOrder) => {
  const amount = picturesCart.map(item => item.amount).reduce((a: number, b: number) => a + b, 0)
  const salary = picturesCart.map(item => item.salary).reduce((a: number, b: number) => a + b, 0)
  const salaryDiscount = salary
  const salaryIncrease = salary + salary * 0.2

  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <div className={styles.cartOrderInfo}>
        <div>Товары, {amount} шт.</div>
        <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
      </div>
      {!discount ? <div className={styles.cartOrderInfo}>
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div> : null}
      <div className={styles.cartOrderTotal}>
        <div>Итого</div>
        <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
      </div>
      <button className={styles.cartOrderButton}>Заказать</button>
    </div>
  )
}