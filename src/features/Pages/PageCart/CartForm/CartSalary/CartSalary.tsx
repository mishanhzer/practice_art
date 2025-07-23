export const CartSalary = ({ styles, picture, discount }) => {
  return (
    <div className={styles.cartFormSalary}>
      {!discount ? picture.salary : picture.salary + picture.salary * 0.2} ₽
    </div>
  )
}