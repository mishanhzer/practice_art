export interface TypesSizes {
  name: string
  url: string
}

export interface TypesPictureCart {
  active?: boolean
  description?: string
  file?: string
  id?: number
  inStock?: boolean
  materials?: string
  name?: string
  nameImg?: string
  path?: string
  preview?: string
  salary: number
  size?: string
  sizes?: TypesSizes[]
  amount: number
}

export type TypeEvent = React.MouseEvent<HTMLButtonElement | HTMLDivElement>
export type TypeFuncOperation = (a: number, b: number) => number
export type TypeStyles = Record<string, string>
