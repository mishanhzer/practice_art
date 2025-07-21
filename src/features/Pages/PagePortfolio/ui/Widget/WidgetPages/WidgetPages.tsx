import React from "react"
import { NavLink } from "react-router"

import { TypesAnimalsDataPages } from "./types"

import styles from '../../../portfolio.module.scss'

export const WidgetPages = ({ data }: { data: TypesAnimalsDataPages[] }) => {
  return data.map((item) => {
    const showSpinner = () => {
      item.func()
    }

    return (
      <li className={item.class} key={item.name}>
        <NavLink
          onClick={showSpinner}
          className={({ isActive }) => isActive ? styles.activePage : 'none'}
          to={item.path}
        >
          {item.name}
        </NavLink>
      </li>
    )
  })
}