import { Link } from "react-router"

import styles from '../../header.module.scss'

import { mainLogo } from "../../../../../assets/logo/logo"

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