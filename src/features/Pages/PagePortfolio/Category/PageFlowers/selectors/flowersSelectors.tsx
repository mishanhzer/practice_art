import { useStore } from "../../../../../../store/store.ts";

export const useFlowersSelector = () => {
  const flowers = useStore(state => state.flowers)
  return flowers
}

export const useOffsetFlowersSelector = () => {
  const offsetFlowers = useStore(state => state.offsetFlowers)
  return offsetFlowers
}
