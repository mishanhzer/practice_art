import { TypesPictureCart, TypeEvent, TypeFuncOperation, TypeStyles } from "../../types"

export interface TypesCartCounter {
  styles: TypeStyles
  picture: TypesPictureCart
  handleIncreaseSalary: (e: TypeEvent, salary: number, amount: number, func: TypeFuncOperation) => void
  cartId: number
}


