import { TypesPictureCart, TypeEvent, TypeFuncOperation } from "../types"

export interface TypesCartCounter {
  styles: Record<string, string>
  picture: TypesPictureCart
  handleIncreaseSalary: (e: TypeEvent, salary: number, amount: number, func: TypeFuncOperation) => void
  cartId: number
}


