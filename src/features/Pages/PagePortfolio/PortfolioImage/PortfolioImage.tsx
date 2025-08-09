import { TypeImagePortfolio } from "../types"
import styles from '../portfolio.module.scss'

export const PortfolioImage = ({ src, alt }: TypeImagePortfolio) => {
  return (
    <img
      className={styles.imgPortfolio}
      src={src}
      alt={alt} />
  )
}