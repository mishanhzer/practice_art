import {useStore} from '../../../../store/store'

export const useCartPageSelector = () => {
  const picturesCart = useStore(state => state.picturesCart)
  const cart = useStore(state => state.cart)
  const discount = useStore(state => state.discount)
  const getDeleteTest = useStore(state => state.getDeleteTest)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)
  const addInCart = useStore(state => state.addInCart)

  return {
    picturesCart,
    cart,
    discount,
    getDeleteTest,
    deleteDuplicatePicture,
    addInCart
  }
}

export const usePicturesCartSelector = () => {
  const picturesCart = useStore(state => state.picturesCart)
  return picturesCart
}
 
export const useCartSelector = () => {
  const cart = useStore(state => state.cart)
  return cart
}
export const useDiscountSelector = () => {
    const discount = useStore(state => state.discount)
    return discount
  }
 
export const useGetDeleteSelector = () => {
  const getDeleteTest = useStore(state => state.getDeleteTest)
  return getDeleteTest
}

export const useDeleteDuplicatePictureSelector = () => {
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)
  return deleteDuplicatePicture
}
  
export const useAddInCartSelector = () => {
  const addInCart = useStore(state => state.addInCart)
  return addInCart
}

  