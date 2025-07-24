import { TypesCartSalary } from './types'

export const CartSalary = ({ styles, picture, discount }: TypesCartSalary) => {
  return (
    <div className={styles.cartFormSalary}>
      {!discount ? picture.salary : picture.salary + picture.salary * 0.2} ₽
    </div>
  )
}