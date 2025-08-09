import { useStore } from "../../../../../../store/store.ts";

export const useFlowersSelectors = () => {
  const flowers = useStore(state => state.flowers)
  const offsetFlowers = useStore(state => state.offsetFlowers)

  return {
    flowers,
    offsetFlowers
  }
}


