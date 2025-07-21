import { TypesAnimalsDataPages } from "./WidgetPages/types"

export interface TypesWidget {
  getStart: () => void
  paginate: (str: string) => void
  getEnd: () => void
  dataPages: TypesAnimalsDataPages[]
}