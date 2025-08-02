export interface TypesSizes {
  name: string
  url: string
}

export interface TypesData {
  name?: string
  nameImg?: string
  inStock?: boolean
  salary: number
  description?: string
  size?: string
  materials?: string
  active?: boolean
  id?: number
  file?: string
  amount: number
  path?: string
  preview?: string
  sizes?: TypesSizes[]
}

export interface TypesSaveActive {
  [key: number]: boolean
}