import React from "react"

import { TypesButtonNavigate } from "./types"

import styles from '../../portfolio.module.scss'

export const ButtonNavigate = ({ className, navigateFunc, source, name }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button
        tabIndex={0}
        onClick={navigateFunc}
      >
        <img
          className={name === 'start' || name === 'prev' ? styles.listItemPrevAndStart : styles.listItemNextAndEnd}
          src={source}
          alt={name}
        />
      </button>
    </li>
  )
}