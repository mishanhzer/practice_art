import React from "react"
import { Link } from "react-router"

import { mainLogo } from "../../../../assets/logo/logo"
import styles from '../appHeader.module.scss'

export const HomeLink = () => {
  return (
    <Link
      to='/home'>
      <img
        className={styles.homeLinkImg}
        src={mainLogo}
        alt="mainLogo"
      />
    </Link>
  )
}