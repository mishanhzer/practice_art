import { TypesLike } from './types'

import { HeartDefault } from './HeartDefault/HeartDeafault'
import { HeartActive } from './HeartActive/HeartActive'

import styles from '../../../pageShop.module.scss'

export const Like = ({ handleClickLike, item, saveActive }: TypesLike) => {
  console.log(saveActive)
  return (
    <div className={styles.containerLike}>
      <button
        onClick={handleClickLike}
        disabled={item.salary ? false : true}
        data-name={item.name}
        data-id={item.id}>
        {item.id !== undefined && saveActive[item.id] ? <HeartActive /> : <HeartDefault />}
      </button>
    </div>
  )
}