import { useStore } from "../../../store/store.ts";

export const useLoadingSelector = () => {
  const loading = useStore(state => state.loading)
  return loading
}

export const useGetDataSelector = () => {
  const getData = useStore(state => state.getData)
  return getData
}

