import { useStore } from "../../../store/store.ts";

export const useStillLifeSelector = () => {
  const stillLife = useStore(state => state.stillLife)
  return stillLife
}

export const useOffsetStillLifeSelector = () => {
  const offsetStillLife = useStore(state => state.offsetStillLife)
  return offsetStillLife
}
