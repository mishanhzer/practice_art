import { useCartOrderSelectors } from '../selectors/cartOrderSelector'

export const CartOrder = ({ styles, discount }) => {
  const dataOrder = useCartOrderSelectors()
  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Товары, {dataOrder.amount} шт.</div>
        <div>{!discount ? dataOrder.salaryDiscount : dataOrder.salaryIncrease} ₽</div>
      </div>
      {!discount ? <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Моя скидка</div>
        <div><span>−</span>{dataOrder.salary * 0.2} ₽</div>
      </div> : null}
      <div className={styles.cartOrderTotal}>
        <div>Итого</div>
        <div>{!discount ? dataOrder.salaryDiscount : dataOrder.salaryIncrease} ₽</div>
      </div>
      <button className={styles.cartOrderBtn}>Заказать</button>
    </div>
  )
}