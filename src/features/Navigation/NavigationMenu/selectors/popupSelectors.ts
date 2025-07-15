import { useStore } from "../../../../store/store";

export const usePageAnimalsSelector = () => {
  const pageAnimals = useStore(state => state.pageAnimals)
  return pageAnimals
}

export const usePageFlowersSelector = () => {
  const pageFlowers = useStore(state => state.pageFlowers)
  return pageFlowers
}

export const usePageStillLifeSelector = () => {
  const pageStillLife = useStore(state => state.pageStillLife)
  return pageStillLife
}

export const usePagePeopleAndAnimalsSelector = () => {
  const pagePeopleAndAnimals = useStore(state => state.pagePeopleAndAnimals)
  return pagePeopleAndAnimals
}
