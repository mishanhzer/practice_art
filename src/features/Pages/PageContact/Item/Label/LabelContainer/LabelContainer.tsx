import { TypesNameLabel } from "../types"

export const LabelContainer = ({ name }: TypesNameLabel) => {
  return (
    <div>{<span className={`text-red-500 self-center`}>*</span>} {name}</div>
  )
}