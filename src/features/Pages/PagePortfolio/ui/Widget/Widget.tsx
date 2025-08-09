import { WidgetNavigation } from './WidgetNavigation/WidgetNavigation';
import { WidgetPages } from './WidgetPages/WidgetPages';

import { TypesWidget } from "./types"

import styles from '../../portfolio.module.scss'

import { arrowPages, doubleArrowPages } from "../../../../../assets/logo/logo";

export const Widget = ({ getStart, paginate, getEnd, dataPages }: TypesWidget) => {
  return (
    <ul className={styles.pagesWidget}>
      <WidgetNavigation className={styles.itemCommon} navigateFunc={(getStart)} source={doubleArrowPages} name={'start'} />
      <WidgetNavigation className={styles.itemCommon} navigateFunc={() => paginate('prev')} source={arrowPages} name={'prev'} />
      <WidgetPages
        data={dataPages}
      />
      <WidgetNavigation className={styles.itemCommon} navigateFunc={() => paginate('next')} source={arrowPages} name={'next'} />
      <WidgetNavigation className={styles.itemCommon} navigateFunc={getEnd} source={doubleArrowPages} name={'end'} />
    </ul>
  )
}