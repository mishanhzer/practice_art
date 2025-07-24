import { ButtonIncDec } from "../../ui/ButtonIncDec/ButtonIncDec"

import { TypesCartCounter } from "./types"

export const CartCounter = ({ styles, picture, handleIncreaseSalary, cartId }: TypesCartCounter) => {
  return (
    <div className={styles.cartFormButtonsCounter}>
      {picture.amount > 1 ?
        <ButtonIncDec
          func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
          disabled={picture.amount > 1 ? false : true}
          style={styles.buttonDecrease}
          data={picture.id} /> :
        <ButtonIncDec
          func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
          disabled={picture.amount === 1 ? true : false}
          style={styles.buttonDecrease}
          data={picture.id} />
      }
      <div className={styles.cartFormCounterValue}>{picture.amount}</div>
      <ButtonIncDec func={(e) => handleIncreaseSalary(e, picture.salary, 1, (a, b) => a + b)} disabled={picture.amount > 1 && cartId === picture.id ? false : false} style={styles.buttonIncrease} data={picture.id} />
    </div>
  )
}