import { useStore } from "../../../store/store.ts";

export const useAnimalsSelector = () => {
  const animals = useStore(state => state.animals)
  return animals
}

export const useOffsetAnimalsSelector = () => {
  const offsetAnimals = useStore(state => state.offsetAnimals)
  return offsetAnimals
}
