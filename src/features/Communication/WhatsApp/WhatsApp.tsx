import { whatsAppLink } from "./constants"

import styles from './whatsApp.module.scss'

import { whatsAppImg } from "../../../assets/logo/logo"

export const WhatsApp = () => {
  return (
    <div>
      <a href={whatsAppLink}>
        <img className={styles.image} src={whatsAppImg} alt="" />
        {/* <img className={`w-[60px] fixed bottom-10 right-10 animate-bounce`} src={whatsAppImg} alt="" />  - c анимацией */}
      </a>
    </div>
  )
}

