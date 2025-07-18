import React, { useState } from "react"

import { ModalPortal } from "./Modal/Modal.tsx";
import { AnimationContainer } from "./AnimationContainer/AnimationContainer.tsx";

import { TypesPicturesContent } from "./types"

export const PicturesContent = ({ stylesContainer, displayedData, stylesWrapperImg }: TypesPicturesContent) => {
  const [pictureName, setPictureName] = useState<string | null>('')

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setPictureName(dataTarget)
  }

  const handleClose = () => {
    setPictureName('')
  }

  return (
    <div className={`${stylesContainer}`}>
      {displayedData.map((item, i) => (
        <AnimationContainer key={i} >
          <div
            onClick={handleClick}
            className={`${stylesWrapperImg}`} data-name={item.name}>
            {pictureName === item.name ?
              <ModalPortal
                position={pictureName}
                handleClose={handleClose}
                source={item.file}
                alt={item.name} /> : null}
            <img className={`w-[350px] h-[350px] object-cover lozad`} src={item.sizes[0].url} alt={item.name} />
          </div>
        </AnimationContainer>
      ))
      }
    </div >
  )
}