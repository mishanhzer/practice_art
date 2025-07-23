import {useStore} from '../../../../store/store'

export const useCartOrderSelectors = () => {
  const picturesCart = useStore(state => state.picturesCart)

  const amount = picturesCart.map(item => item.amount).reduce((a: number, b: number) => a + b, 0)
  const salary = picturesCart.map(item => item.salary).reduce((a: number, b: number) => a + b, 0)
  const salaryDiscount = salary
  const salaryIncrease = salary + salary * 0

  return {
    amount, 
    salary,
    salaryDiscount,
    salaryIncrease
  }
}