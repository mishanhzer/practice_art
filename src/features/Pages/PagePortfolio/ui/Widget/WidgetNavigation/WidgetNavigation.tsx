import React from "react"

import { TypesWidgetNavigation } from "./types"

import styles from '../../../portfolio.module.scss'

export const WidgetNavigation = ({ className, navigateFunc, source, name }: TypesWidgetNavigation) => {
  return (
    <li className={className}>
      <button
        tabIndex={0}
        onClick={navigateFunc}
      >
        <img
          className={name === 'start' || name === 'prev' ? styles.prevAndStart : styles.nextAndEnd}
          src={source}
          alt={name}
        />
      </button>
    </li>
  )
}