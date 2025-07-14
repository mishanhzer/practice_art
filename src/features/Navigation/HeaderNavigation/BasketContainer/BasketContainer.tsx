import React from "react";

import { Basket } from "./Basket/Basket";
import { LinkButton } from "./ContactMeBtn/ContactMeBtn";

import styles from '../appHeader.module.scss'

export const BasketContainer = () => {
  <div className={styles.containerBasket}>
    <Basket className={styles.basket} />
    <LinkButton ml='ml-8' fz='text-base' />
  </div>
}