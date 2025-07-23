export interface TypesButtonIncDec {
  func: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
  disabled: boolean
  style: string
  data?: number
}