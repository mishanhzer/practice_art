import React from "react";

import { ImagesContainer } from "./ImagesContainer/ImagesContainer";
import { BasketContainer } from "./BasketContainer/BasketContainer";
import { LogoContainer } from './LogoContainer/LogoContainer';

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <ImagesContainer />
      <LogoContainer />
      <BasketContainer />
    </header>
  );
};

export default Header
