import ReactDOM from 'react-dom';
import React, { useRef, useEffect } from 'react';

import { AnimationSinglePicture } from '../AnimationContainer/AnimationContainer';

import { positionModal, portalBlock } from './constants';

import { TypesModalPortal } from "./types"

import styles from '../../../Pages/PagePortfolio/portfolio.module.scss'

export const ModalPortal = ({ position, handleClose, source, alt }: TypesModalPortal) => {
  const ref = useRef(null)

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    window.addEventListener('keydown', closeModal)
    return () => {
      window.removeEventListener('keydown', closeModal)
    }
  }, [])

  return ReactDOM.createPortal(
    <AnimationSinglePicture>
      <div onClick={(e) => e.stopPropagation()}>
        <div
          onClick={() => handleClose()}
          className={`${styles.overlay}`}>
          <div onClick={(e) => e.stopPropagation()}
            className={positionModal(styles.wrapperModal, position)}
          >
            <button onClick={handleClose} className={styles.close} />
            <img ref={ref} className={`absolute lozad`} src={source} alt={alt} />
          </div>
        </div>
      </div>
    </AnimationSinglePicture >,
    portalBlock
  );
};
