  import {useStore} from '../../../../store/store'

  export const useSetCart = () => {
    const setCartTest = useStore(state => state.setCartTest)
    return setCartTest
  }

  export const useSetAddInCart = () => {
    const setAddInCart = useStore(state => state.setAddInCart)
    return setAddInCart
  }

  export const useAddInCart = () => {
    const addInCart = useStore(state => state.addInCart)
    return addInCart
  }

  export const useGetDeleteItemCart = () => {
    const getDeleteItemCart = useStore(state => state.getDeleteItemCart)
    return getDeleteItemCart
  }


  export const useCartMain = () => {
    const cartMain = useStore(state => state.cart)
    return cartMain
  }

 export const useAddProperty = () => {
    const addProperty = useStore(state => state.addProperty)
    return addProperty
  }

