import { TypesAnimalsDataPages } from "../ListItemPage/types"

export interface TypesWidgetPages {
  getStart: () => void
  paginate: (str: string) => void
  getEnd: () => void
  dataPages: TypesAnimalsDataPages[]
}