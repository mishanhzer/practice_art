import { useCartOrderSelectors } from '../selectors/cartOrderSelector'
import { useStore } from '../../../../store/store'

export const CartOrder = ({ styles, discount }) => {
  const picturesCart = useStore(state => state.picturesCart)
  const amount = picturesCart.map(item => item.amount).reduce((a: number, b: number) => a + b, 0)
  const salary = picturesCart.map(item => item.salary).reduce((a: number, b: number) => a + b, 0)
  const salaryDiscount = salary
  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Товары, {amount} шт.</div>
        <div>{!discount ? salaryDiscount : salary + salary * 0.2} ₽</div>
      </div>
      {!discount ? <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div> : null}
      <div className={styles.cartOrderTotal}>
        <div>Итого</div>
        <div>{!discount ? salaryDiscount : salary + salary * 0.2} ₽</div>
      </div>
      <button className={styles.cartOrderBtn}>Заказать</button>
    </div>
  )
}

// export const CartOrder = ({ picturesCart, styles, discount }) => {
//   const amount = picturesCart.map(item => item.amount).reduce((a: number, b: number) => a + b, 0)
//   const salary = picturesCart.map(item => item.salary).reduce((a: number, b: number) => a + b, 0)
//   const salaryDiscount = salary
//   const salaryIncrease = salary + salary * 0.2

//   console.log(salary)

//   return (
//     <div className={styles.cartOrderContainer}>
//       <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
//       <div className={styles.cartOrderGoodsAndDiscount}>
//         <div>Товары, {amount} шт.</div>
//         <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
//       </div>
//       {!discount ? <div className={styles.cartOrderGoodsAndDiscount}>
//         <div>Моя скидка</div>
//         <div><span>−</span>{salary * 0.2} ₽</div>
//       </div> : null}
//       <div className={styles.cartOrderTotal}>
//         <div>Итого</div>
//         <div>{!discount ? salaryDiscount : salaryIncrease} ₽</div>
//       </div>
//       <button className={styles.cartOrderBtn}>Заказать</button>
//     </div>
//   )
// }