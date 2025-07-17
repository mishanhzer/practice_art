import { useStore } from "../../../store/store.ts";

export const usePeopleAndAnimalsSelector = () => {
  const peopleAndAnimals = useStore(state => state.peopleAndAnimals)
  return peopleAndAnimals
}

export const useOffsetPeopleAndAnimalsSelector = () => {
  const offsetPeopleAndAnimals = useStore(state => state.offsetPeopleAndAnimals)
  return offsetPeopleAndAnimals
}
