import React from "react"

import styles from '../../portfolio.module.scss'

import { TypesButtonNavigate } from "./types"

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