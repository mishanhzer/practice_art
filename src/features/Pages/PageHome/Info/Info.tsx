import React from "react"

import { name, subheader, description, subDescription } from '../constants.ts'

import styles from '../home.module.scss'

import homePicture from '../../../../assets/images/homeImages/homePicture.jpg'

export const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.header}>{name}</div>
        <div className={styles.subheader}>{subheader}</div>
        <div className={styles.description}>
          {description}
          <br />
          <br />
          {subDescription}
        </div>
      </div>
      <img
        className={`w-196 h-15`}
        src={homePicture}
        alt="homePicture" />
    </div>
  )
}