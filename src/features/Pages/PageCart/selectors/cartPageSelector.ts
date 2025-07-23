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