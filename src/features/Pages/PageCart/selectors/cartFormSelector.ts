  import {useStore} from '../../../../store/store'

  export const useCartFormSelector = () => {
    const setCartTest = useStore(state => state.setCartTest)
    const setAddInCart = useStore(state => state.setAddInCart)
    const addInCart = useStore(state => state.addInCart)
    const getDeleteItemCart = useStore(state => state.getDeleteItemCart)
    const cartMain = useStore(state => state.cart)

    return {
      setCartTest,
      setAddInCart,
      addInCart,
      getDeleteItemCart,
      cartMain
    }
  }

  export const useCartMain = () => {
    const cartMain = useStore(state => state.cart)
    return cartMain
  }

  export const useSetCartTest = () => {
    const setCartTest = useStore(state => state.setCartTest)
    return setCartTest
  }
  
  