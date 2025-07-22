const CartEmpty = () => {
  return (
    <div className={styles.cartEmptyContainer}>
      <div className={styles.cartEmptyImg}>
        <img src={emptyCart} alt="" />
      </div>
      <h2 className={styles.cartEmptyHeader}>В корзине пока пусто</h2>
      <div className={styles.cartEmptyDescr}>Загляните в магазин — там картины, которые могут вам понравиться</div>
      <NavLink
        to="/shop"
        className={styles.cartEmptyBtn}>Перейти в магазин
      </NavLink>
    </div>
  )
}
