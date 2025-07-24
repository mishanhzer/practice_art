import { TypesPictureCart } from "../types"

export interface TypesCartForm {
   picturesCart: TypesPictureCart[]
   getDeleteTest: (elem: number) => void
   setViewDeleteBtn: React.Dispatch<React.SetStateAction<number | undefined>>
   discount: boolean
}

