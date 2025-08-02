import {TypesData} from '../../../../types'

export interface TypesButtonCart {
  item: TypesData
  testClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  btnText: string
  style?: string
  img: () => React.ReactNode | null
}