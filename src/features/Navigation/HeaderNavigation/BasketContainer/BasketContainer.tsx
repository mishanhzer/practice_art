import React from "react";

import { Basket } from "./Basket/Basket";
import { ContactMeBtn } from "./ContactMeBtn/ContactMeBtn";

import styles from '../appHeader.module.scss'

export const BasketContainer = () => {
  return (
    <div className={styles.containerBasket}>
      <Basket className={styles.basket} />
      <ContactMeBtn ml='ml-8' fz='text-base' />
    </div>
  )
}