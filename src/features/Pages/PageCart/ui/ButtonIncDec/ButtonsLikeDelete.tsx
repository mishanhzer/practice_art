import classNames from "classnames"

import { likeCart, deleteCart } from "./LogoCart/LogoCart"

import { TypesButtonsLikeDelete } from './types'

export const ButtonsLikeDelete = ({ styles, activeLike, picture, handleLikeClick, handleTestClick, btnId }: TypesButtonsLikeDelete) => {
  return (
    <div className={styles.cartFormButtonsContainer}>
      {activeLike && picture.id === btnId ?
        <button onClick={handleLikeClick} data-btn={picture.id} className={classNames(styles.cartFormButtons, styles.cartFormLikeActive)}>
          {likeCart()}
          <div className={styles.cartFormLikeHover}></div>
        </button> :
        <button onClick={handleLikeClick} data-btn={picture.id} className={`${styles.cartFormButtons}`}>
          {likeCart()}
        </button>}
      <button
        onClick={handleTestClick}
        data-id={picture.id}
        className={styles.cartFormButtons}>
        {deleteCart()}
      </button>
    </div>
  )
}