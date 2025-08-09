  import {useStore} from '../../../../store/store'

  export const useCartFormSelectors = () => {
    const setCartTest = useStore(state => state.setCartTest)
    const setAddInCart = useStore(state => state.setAddInCart)
    const addInCart = useStore(state => state.addInCart)
    const getDeleteItemCart = useStore(state => state.getDeleteItemCart)
    const cartMain = useStore(state => state.cart)
    const addProperty = useStore(state => state.addProperty)
    
    return {
      setCartTest,
      setAddInCart,
      addInCart,
      getDeleteItemCart, 
      cartMain,
      addProperty
    }
  }
