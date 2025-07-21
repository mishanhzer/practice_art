import React from 'react'

import { headerText, subHeaderText, descriptionText } from './constants'

import styles from './about.module.scss'

import aboutImage from '../../../../assets/images/aboutImages/aboutImage.jpg'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div>
          <img className={styles.mainImg} src={aboutImage} alt="aboutImage" />
        </div>
        <div className={styles.wrapperContent}>
          <h2 className={styles.header}>{headerText}</h2>
          <div className={styles.subheader}>{subHeaderText}</div>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: descriptionText }} />
        </div>
      </div>
    </div>
  )
}