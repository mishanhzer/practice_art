import { Link } from 'react-router-dom';

import { TypesPortfolioItem } from "./types";

import styles from '../portfolio.module.scss'

export const PortfolioItem = ({ Component, headText, text, path }: TypesPortfolioItem) => {
  return (
    <>
      <div className={styles.containerPortfolioItem}>
        <Link to={path}>{Component}</Link>
        <div className={styles.containerPortfolioItemDescr}>
          <Link
            className={styles.linkCategory}
            to={path}>{headText}
          </Link>
          <div className={styles.descriptionCategory}>
            <span className={styles.boldText}>{headText}</span>. {text}</div>
        </div>
      </div>
    </>
  )
}

