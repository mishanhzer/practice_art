import React from 'react'

import { headerText, subHeaderText, descriptionText } from './contstants'

import styles from '../about.module.scss'

import aboutImage from '../../../../assets/images/aboutImage/aboutPicture.jpg'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img className={styles.image} src={aboutImage} alt="aboutImage" />
        </div>
        <div className={styles.wrapperDescription}>
          <h2 className={styles.header}>{headerText}</h2>
          <div className={styles.subheader}>{subHeaderText}</div>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: descriptionText }} />
        </div>
      </div>
    </div>
  )
}