import { TypesLike } from './types'

import { HeartDefault } from './HeartDefault/HeartDeafault'
import { HeartActive } from './HeartActive/HeartActive'

import styles from '../../../pageShop.module.scss'

export const Like = ({ handleClickLike, item, saveActive }: TypesLike) => {
  return (
    <div className={styles.containerLike}>
      <button
        onClick={handleClickLike}
        disabled={item.salary ? false : true}
        // className={styles.btn}
        data-name={item.name}
        data-id={item.id}>
        {saveActive[item.id] ? <HeartActive /> : <HeartDefault />}
      </button>
    </div>
  )
}