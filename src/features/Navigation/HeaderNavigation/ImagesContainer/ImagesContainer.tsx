import { ExternalLinks } from "./ExternalLinks/ExternalLinks";

import { externalImages } from './constants'

import styles from '../header.module.scss'

export const ImagesContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerImages}>
        {externalImages.map((item) => {
          return <ExternalLinks key={item.name} source={item.src} name={item.name} link={item.link} />;
        })}
      </div>
    </div>
  )
}