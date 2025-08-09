import { useStore } from "../../../../../../store/store.ts";

export const useStillLifeSelectors = () => {
  const stillLife = useStore(state => state.stillLife)
  const offsetStillLife = useStore(state => state.offsetStillLife)

  return {
    stillLife,
    offsetStillLife
  }
}

