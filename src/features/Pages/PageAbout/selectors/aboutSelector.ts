import {useStore} from '../../../../store/store'

export const useAboutSelectors = () => {
  const works = useStore(state => state.works).slice(-9)
  const getData = useStore(state => state.getData)
  const loading = useStore(state => state.loading)
  
  return {
    works,
    getData,
    loading
  }
}

