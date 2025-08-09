  import {useStore} from '../../../../store/store'
  
  // inCart

  export const useInCartSelectors = () => {
    const getPictureCart = useStore(state => state.getPictureCart)
    const getPicturesCart = useStore(state => state.getPicturesCart)
    const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)
    const testCart = useStore(state => state.testCart)
    const picturesCart = useStore(state => state.picturesCart)
    const setCartTest = useStore(state => state.setCartTest)
    
    return {
      getPictureCart,
      getPicturesCart,
      deleteDuplicatePicture,
      testCart,
      picturesCart,
      setCartTest
    }
  }
 
// Common  categories
export const useShopCommonSelectors = () => {
  const getData = useStore(state => state.getData)
  const setNewData = useStore(state => state.setNewData)
  const loading = useStore(state => state.loading)
  const setAddInCart = useStore(state => state.setAddInCart)
  const addInCart = useStore(state => state.addInCart)

  return {
    getData,
    setNewData,
    loading,
    setAddInCart,
    addInCart
  }
}

 // ContentCategory
 export const useContentCategorySelectors = () => {
    const newData = useStore(state => state.newData)
    const discount = useStore(state => state.discount)
    const cart = useStore(state => state.cart)
    const setCartActiveItems = useStore(state => state.setCartActiveItems)

    return {
      newData,
      discount,
      cart,
      setCartActiveItems
    }
 }

  
// Subscribe
export const useSetDiscount = () => {
  const setDiscount = useStore(state => state.setDiscount)
  return setDiscount
}

// Page Category
export const useCategorySelectors = () => {
  const animals = useStore(state => state.animals)
  const flowers = useStore(state => state.flowers)
  const peopleAndAnimals = useStore(state => state.peopleAndAnimals)
  const stillLife = useStore(state => state.stillLife)

  return {
    animals,
    flowers,
    peopleAndAnimals,
    stillLife
  }
}


// // Animals
// export const useAnimals = () => {
//   const animals = useStore(state => state.animals)
//   return animals
// }

// // Flowers
// export const useFlowers = () => {
//   const flowers = useStore(state => state.flowers)
//   return flowers
// }

// // People and Animals
// export const usePeopleAndAnimals = () => {
//   const peopleAndAnimals = useStore(state => state.peopleAndAnimals)
//   return peopleAndAnimals
// }
// // Still Life
// export const useStillLife = () => {
//  const stillLife = useStore(state => state.stillLife)
//   return stillLife
// }










 