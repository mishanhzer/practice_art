import { text } from './constants'

import styles from '../../../pageShop.module.scss'

import check from '../../../../../../assets/images/cartImage/check.svg'

export const PopupCart = () => {
  return (
    <div className={styles.popupCartContainer}>
      <div className={styles.popupCartWrapper}>
        <img className={styles.popupCartImage} src={check} alt="checkImg" />
        <div>{text}</div>
      </div>
    </div>
  );
};