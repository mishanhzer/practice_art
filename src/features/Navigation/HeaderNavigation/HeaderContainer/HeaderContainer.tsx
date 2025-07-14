import React, { FC } from "react";
import { HeaderContainerProps } from "./types"

import styles from '../appHeader.module.scss'

export const HeaderContainer: FC<HeaderContainerProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {children}
      </div>
    </header>
  );
};
