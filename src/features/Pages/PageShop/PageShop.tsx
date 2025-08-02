import { NavLink } from "react-router"

import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp"

import { dataPagesShop } from './constants'

import styles from './pageShop.module.scss'

const PageShop = () => {
  return (
    <div className={styles.container}>
      {dataPagesShop.map(item => {
        return (
          <NavLink to={item.link} key={item.name}>
            <div className={styles.wrapperImg}>
              <img className={styles.image} src={item.src} alt={item.name} />
            </div>
            <div className={styles.header}>{item.name}</div>
          </NavLink>
        )
      })}
      <WhatsApp />
    </div>
  )
}

export default PageShop