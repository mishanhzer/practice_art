import { TypesCartAmount } from './types'

export const CartAmount = ({ styles, cart }: TypesCartAmount) => {
  return (
    <h2 className={styles.cartFormAmount}>
      {cart.length} картин{cart.length % 10 === 1 && cart.length % 100 !== 11 ? 'а' : cart.length % 10 >= 2 && cart.length % 10 <= 4 && (cart.length % 100 < 10 || cart.length % 100 >= 20) ? 'ы' : ''}
    </h2>
  )
}