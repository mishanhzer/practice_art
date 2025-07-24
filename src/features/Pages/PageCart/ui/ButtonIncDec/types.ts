import { TypeEvent, TypesPictureCart, TypeStyles } from "../../types"

export interface TypesButtonIncDec {
  func: (e: TypeEvent) => void
  disabled: boolean
  style: string
  data?: number
}

export interface TypesButtonsLikeDelete {
  styles: TypeStyles
  activeLike: boolean
  picture: TypesPictureCart
  handleLikeClick: (e: TypeEvent) => void
  handleTestClick: (e: TypeEvent) => void
  btnId: number
}
