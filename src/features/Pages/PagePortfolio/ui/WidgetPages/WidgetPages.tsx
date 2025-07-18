import React from 'react'
import { ButtonNavigate } from '../ButtonNavigate/ButtonNavigate';
import { ListItemsPage } from '../ListItemPage/ListItemsPages';

import { TypesWidgetPages } from "./types"

import styles from '../../portfolio.module.scss'

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

export const WidgetPages = ({ getStart, paginate, getEnd, dataPages }: TypesWidgetPages) => {
  return (
    <ul className={styles.links}>
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={(getStart)} source={doubleArrowPages} name={'start'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={() => paginate('prev')} source={arrowPages} name={'prev'} />
      <ListItemsPage
        data={dataPages}
      />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={() => paginate('next')} source={arrowPages} name={'next'} />
      <ButtonNavigate className={styles.listItemCommonStyle} navigateFunc={getEnd} source={doubleArrowPages} name={'end'} />
    </ul>
  )
}