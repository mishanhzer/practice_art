import { TypesSizes, TypeEvent, TypesPictureCart } from "../types"

export interface TypesCartInfoPictures {
  styles: Record<string, string>
  picture: TypesPictureCart
  handleLikeClick: (e: TypeEvent) => void
  activeLike: boolean
  handleTestClick: (e: TypeEvent) => void
  btnId: number
}

