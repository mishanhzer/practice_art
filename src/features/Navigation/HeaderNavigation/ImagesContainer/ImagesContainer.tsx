import React from "react";

import { ExternalLinks } from "./ExternalLinks/ExternalLinks";
import { externalImages } from './constants'

import styles from '../appHeader.module.scss'

export const ImagesContainer = () => {
  return (
    <div className={styles.containerImages}>
      {externalImages.map((item) => {
        return <ExternalLinks key={item.name} source={item.src} name={item.name} link={item.link} />;
      })}
    </div>
  )
}