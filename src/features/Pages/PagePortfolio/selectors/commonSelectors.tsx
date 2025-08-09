import { useStore } from "../../../../store/store.ts";

export const usePortfolioCommonSelectors = () => {
  const loading = useStore(state => state.loading)
  const getData = useStore(state => state.getData)

  return {
    loading,
    getData
  }
}



