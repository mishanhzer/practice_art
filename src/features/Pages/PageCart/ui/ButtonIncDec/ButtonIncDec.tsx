import { TypesButtonIncDec } from "./types"

export const ButtonIncDec = ({ func, disabled, style, data }: TypesButtonIncDec) => {
  return (
    <button
      onClick={func}
      disabled={disabled}
      className={style}
      data-id={data}>
    </button>
  )
}