import { TypesSalary } from './types'

import styles from '../../../pageShop.module.scss'

export const Salary = ({ item, discount }: TypesSalary) => {
  const salaryWithoutDiscount = item.salary + item.salary * 0.2
  return (
    <div className={discount ? `${styles.salary} ${styles.animateDiscount}` : `${styles.salary} animate-animateOpacityBefore`}>
      {<div>
        {item.salary ? !discount ? `${item.salary} ₽` : `${salaryWithoutDiscount} ₽` : <div>Продано</div>}
      </div>}
      <div className={`${discount ? `hidden` : 'block'} ${styles.salaryWithOutDiscount}`}>
        {item.salary ? salaryWithoutDiscount : null}
      </div>
      <div className={`${discount ? `hidden` : `block`} ${styles.salaryWithDiscount}`}>
        {item.salary && !discount ? `-20%` : null}
      </div>
    </div>
  )
}