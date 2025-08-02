import { TypesData, TypesSaveActive } from "../../types"

export interface TypesCategoryProps {
  commonData: TypesData[]
  limit: number
  handleClickLike: (e: React.MouseEvent<HTMLButtonElement>) => void
  saveActive: TypesSaveActive
}