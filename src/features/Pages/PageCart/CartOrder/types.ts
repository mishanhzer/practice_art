import { TypesPictureCart, TypeStyles } from "../types"

export interface TypesCartOrder {
  picturesCart: TypesPictureCart[]
  styles: TypeStyles
  discount: boolean
}