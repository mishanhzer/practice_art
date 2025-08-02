export interface TypesSizes {
  name: string
  url: string
}

export interface TypesDataWorks {
  file: string
  name: string
  path: string
  preview: string
  sizes: TypesSizes[]
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

export interface TypesStore {
  works: TypesDataWorks[]
  animals: TypesDataWorks[]
  flowers: TypesDataWorks[]
  stillLife: TypesDataWorks[]
  peopleAndAnimals: TypesDataWorks[]
  loading: string
  getData: (category: string, url: string, offsetName: string, offset: number, pageName: string, page?: number) => void
  offsetAllWorks: number
  offsetAnimals: number
  offsetFlowers: number
  offsetStillLife: number
  offsetPeopleAndAnimals: number
  pageAllWorks: number
  pageAnimals: number
  pageFlowers: number
  pageStillLife: number
  pagePeopleAndAnimals: number

  pictureCart: TypesPictureCart
  picturesCart: TypesPictureCart[]

  getPictureCart: (picture: TypesPictureCart) => void
  getDeleteTest: (dataId: number) => void
  deleteDuplicatePicture: () => void
  getPicturesCart: () => void

  addInCart: boolean
  setAddInCart: (active: boolean) => void

  cart: TypesPictureCart[]
  setCartTest: (cart: TypesPictureCart[]) => void

  testCart: TypesPictureCart[]
  setCartActiveItems: (cart: TypesPictureCart[]) => void

  discount: boolean
  setDiscount: (bool: boolean) => void

  newData: TypesPictureCart[]

  setNewData: (data: TypesPictureCart[]) => void

  isAddedToCart: {
    [key: number]: boolean
  }

  addProperty: (property: number, value: boolean) => void

  getDeleteItemCart: (dataId: number) => void
}