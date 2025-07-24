import { ButtonsLikeDelete } from '../../ui/ButtonIncDec/ButtonsLikeDelete'

import { TypesCartInfoPictures } from './types'

export const CartInfoPictures = ({ styles, picture, handleLikeClick, activeLike, handleTestClick, btnId }: TypesCartInfoPictures) => {
  return (
    <div className={styles.cartFormDescrWrapper}>
      <img src={picture.id || !picture.id ? picture?.sizes?.[0].url : ''} className={styles.cartFormImg} alt={picture.name} />
      <div className={styles.cartFormDescr}>
        <h3 className={styles.cartFormName}>{picture.name}</h3>
        <div className={styles.cartFormInfo}>Размер: {picture.size}</div>
        <div className={styles.cartFormInfo}>Материалы: {picture.materials}</div>
        <ButtonsLikeDelete
          styles={styles}
          picture={picture}
          handleLikeClick={handleLikeClick}
          handleTestClick={handleTestClick}
          activeLike={activeLike}
          btnId={btnId} />
      </div>
    </div>
  )
}