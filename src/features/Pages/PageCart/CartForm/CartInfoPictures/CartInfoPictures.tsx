import classNames from "classnames"
import { likeCart, deleteCart } from './LogoCart/LogoCart'

export const CartInfoPictures = ({ styles, picture, handleLikeClick, activeLike, handleTestClick, btnId }) => {
  return (
    <div className={styles.cartFormWrapperPictureAndDescr}>
      <img src={picture.id || !picture.id ? picture?.sizes?.[0].url : ''} className={styles.cartFormPictureImg} alt={picture.name} />
      <div className={styles.cartFormPictureDescr}>
        <h3 className={styles.cartFormPictureName}>{picture.name}</h3>
        <div className={styles.cartFormPictureSizeAndMaterials}>Размер: {picture.size}</div>
        <div className={styles.cartFormPictureSizeAndMaterials}>Материалы: {picture.materials}</div>
        <div className={styles.cartFormPictureLikeAndDeleteContainer}>
          {activeLike && picture.id === btnId ?
            <button onClick={handleLikeClick} data-btn={picture.id} className={classNames(styles.cartFormPictureLikeAndDelete, styles.cartFormPictureLikeActive)}>
              {likeCart()}
              <div className={styles.cartFormPictureLikeActiveBlock}></div>
            </button> :
            <button onClick={handleLikeClick} data-btn={picture.id} className={`${styles.cartFormPictureLikeAndDelete}`}>
              {likeCart()}
            </button>}
          <button
            onClick={handleTestClick}
            data-id={picture.id}
            className={styles.cartFormPictureLikeAndDelete}>
            {deleteCart()}
          </button>
        </div>
      </div>
    </div>
  )
}