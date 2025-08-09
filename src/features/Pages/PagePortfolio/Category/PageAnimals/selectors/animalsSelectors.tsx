import { useStore } from "../../../../../../store/store.ts";

export const useAnimalsSelectors = () => {
  const animals = useStore(state => state.animals)
  const offsetAnimals = useStore(state => state.offsetAnimals)

  return {
    animals,
    offsetAnimals
  }
}

