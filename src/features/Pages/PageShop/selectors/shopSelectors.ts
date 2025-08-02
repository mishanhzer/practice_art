  import {useStore} from '../../../../store/store'
  
  export const useGetPictureCart = () => {
     const getPictureCart = useStore(state => state.getPictureCart)
     return getPictureCart
  }

  export const useGetPicturesCart = () => {
    const getPicturesCart = useStore(state => state.getPicturesCart)
    return getPicturesCart
  }

  export const useDeleteDuplicatePicture = () => {
    const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)
    return deleteDuplicatePicture
  }

  export const useSetAddInCart = () => {
    const setAddInCart = useStore(state => state.setAddInCart)
    return setAddInCart
  }

export const useAddInCart = () => {
  const addInCart = useStore(state => state.addInCart)
  return addInCart
}

export const useTestCart = () => {
  const testCart = useStore(state => state.testCart)
  return testCart
}

 export const usePicturesCart = () => {
   const picturesCart = useStore(state => state.picturesCart)
   return picturesCart
 }
 
export const useSetCartTest = () => {
  const setCartTest = useStore(state => state.setCartTest)
  return setCartTest
 }


// Common  categories
export const useGetData = () => {
   const getData = useStore(state => state.getData)
   return getData
}

export const useSetNewData = () => {
   const setNewData = useStore(state => state.setNewData)
   return setNewData
}

export const useLoading = () => {
  const loading = useStore(state => state.loading)
  return loading
}


 // ContentCategory
 export const useNewData = () => {
  const newData = useStore(state => state.newData)
  return newData
 }

 export const useDiscount = () => {
  const discount = useStore(state => state.discount)
  return discount
 }
  
export const useCart = () => {
  const cart = useStore(state => state.cart)
  return cart
}

export const useSetCartActiveItems = () => {
   const setCartActiveItems = useStore(state => state.setCartActiveItems)
  return setCartActiveItems
}
  
// Subscribe
export const useSetDiscount = () => {
   const setDiscount = useStore(state => state.setDiscount)
  return setDiscount
}

// Animals
export const useAnimals = () => {
  const animals = useStore(state => state.animals)
  return animals
}

// Flowers
export const useFlowers = () => {
  const flowers = useStore(state => state.flowers)
  return flowers
}

// People and Animals
export const usePeopleAndAnimals = () => {
  const peopleAndAnimals = useStore(state => state.peopleAndAnimals)
  return peopleAndAnimals
}
// Still Life
export const useStillLife = () => {
 const stillLife = useStore(state => state.stillLife)
  return stillLife
}










 