import {useStore} from '../../../../store/store'

export const useWorks = () => {
  const works = useStore(state => state.works).slice(-9)
  return works
}

export const useGetData = () => {
  const getData = useStore(state => state.getData)
  return getData
}

export const useLoading = () => {
  const loading = useStore(state => state.loading)
  return loading
}
