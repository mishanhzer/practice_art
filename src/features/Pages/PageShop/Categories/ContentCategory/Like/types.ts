import { TypesData, TypesSaveActive } from "../../../types"

export interface TypesLike {
  handleClickLike: (e: React.MouseEvent<HTMLButtonElement>) => void
  item: TypesData
  saveActive: TypesSaveActive
}