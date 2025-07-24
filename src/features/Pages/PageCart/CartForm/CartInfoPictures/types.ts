import { TypeEvent, TypesPictureCart, TypeStyles } from "../../types"

export interface TypesCartInfoPictures {
  styles: TypeStyles
  picture: TypesPictureCart
  handleLikeClick: (e: TypeEvent) => void
  activeLike: boolean
  handleTestClick: (e: TypeEvent) => void
  btnId: number
}

