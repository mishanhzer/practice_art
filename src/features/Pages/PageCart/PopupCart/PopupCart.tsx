import { text } from './constants'

import styles from '../cart.module.scss'

import check from '../../../../assets/images/cartImage/check.svg'

export const PopupCart = () => {
  return (
    <div className={styles.popupCartContainer}>
      <div className={styles.popupCartWrapper}>
        <img className={styles.popupCartImg} src={check} alt="checkImg" />
        <div>{text}</div>
      </div>
    </div>
  );
};