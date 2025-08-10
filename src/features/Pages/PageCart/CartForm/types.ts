import { TypesPictureCart } from "../types"

export interface TypesCartForm {
   picturesCart: TypesPictureCart[]
   getDeleteTest: (elem: number) => void
   discount: boolean
}

