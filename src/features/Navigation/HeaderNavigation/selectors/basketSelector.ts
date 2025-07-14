import { useStore } from "../../../../store/store";

export const useBasketSelector = () => {
  const picturesCart = useStore(state => state.picturesCart)
  return picturesCart
}
