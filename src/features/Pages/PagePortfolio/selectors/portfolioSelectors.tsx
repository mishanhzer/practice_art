import { useStore } from "../../../../store/store";

export const usePortfolioSelectors = () => {
  const pageAnimals = useStore(state => state.pageAnimals)
  const pageFlowers = useStore(state => state.pageFlowers)
  const pageStillLife = useStore(state => state.pageStillLife)
  const pagePeopleAndAnimals = useStore(state => state.pagePeopleAndAnimals)

  return {
    pageAnimals,
    pageFlowers,
    pageStillLife,
    pagePeopleAndAnimals
  }
}


