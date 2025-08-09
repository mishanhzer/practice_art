import { useStore } from "../../../../../../store/store.ts";

export const usePeopleAndAnimalsSelectors = () => {
  const peopleAndAnimals = useStore(state => state.peopleAndAnimals)
  const offsetPeopleAndAnimals = useStore(state => state.offsetPeopleAndAnimals)

  return {
    peopleAndAnimals,
    offsetPeopleAndAnimals
  }
}


