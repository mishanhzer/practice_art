import React, { useState } from "react"

import { ModalPortal } from "./Modal/Modal.tsx";
import { AnimationContainer } from "./AnimationContainer/AnimationContainer.tsx";

import { TypesPicturesContent } from "./types"

import styles from '../../Pages/PagePortfolio/portfolio.module.scss'

export const PicturesContent = ({ displayedData }: TypesPicturesContent) => {
  const [pictureName, setPictureName] = useState<string | null>('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setPictureName(dataTarget)
  }

  const handleClose = () => {
    setPictureName('')
  }

  return (
    <div className={styles.container}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i} >
          <div
            onClick={handleClick}
            className={styles.wrapperImg} data-name={item.name}>
            {pictureName === item.name ?
              <ModalPortal
                position={pictureName}
                handleClose={handleClose}
                source={item.file}
                alt={item.name} /> : null}
            <img className={`${styles.imgContent} lozad`} src={item.sizes[0].url} alt={item.name} />
          </div>
        </AnimationContainer>
      ))
      }
    </div >
  )
}