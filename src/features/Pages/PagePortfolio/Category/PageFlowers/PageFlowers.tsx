import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { WidgetPages } from "../../ui/WidgetPages/WidgetPages.tsx";
import { Spinner } from "../../../../UI/Spinner/Spinner.tsx";
import { PicturesContent } from "../../ui/PicturesContent/PicturesContent.tsx";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp.tsx";

import { useFlowersSelector, useOffsetFlowersSelector } from "./selectors/flowersSelectors.tsx";
import { useLoadingSelector, useGetDataSelector } from "../../selectors/commonSelectors.tsx";

import { pathFlowers, flowersDataPages, urlFlowers } from "./constants.ts";

import styles from '../../portfolio.module.scss'

const PageFlowers = () => {
  const flowers = useFlowersSelector()
  const offsetFlowers = useOffsetFlowersSelector()

  const loading = useLoadingSelector()
  const getData = useGetDataSelector()

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathFlowers}${pageId}`)
    getData('flowers', urlFlowers, 'offsetFlowers', offsetFlowers, 'pageFlowers', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetFlowers - 9) : Math.min(18, offsetFlowers + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(3, pageId + 1)

    getData('flowers', urlFlowers, 'offsetFlowers', newOffset, 'pageFlowers', newPage)
    navigate(`${pathFlowers}${newPage}`)
  }

  const getStart = () => {
    getData('flowers', urlFlowers, 'offsetFlowers', 0, 'pageFlowers', 1)
    navigate(`${pathFlowers}1`)
  }

  const getEnd = () => {
    getData('flowers', urlFlowers, 'offsetFlowers', 18, 'pageFlowers', 3)
    navigate(`${pathFlowers}3`)
  }

  const flowersData =
    flowersDataPages(pathFlowers, styles.listItems,
      () => getData('flowers', urlFlowers, 'offsetFlowers', 0, 'pageFlowers', 1),
      () => getData('flowers', urlFlowers, 'offsetFlowers', 9, 'pageFlowers', 2),
      () => getData('flowers', urlFlowers, 'offsetFlowers', 18, 'pageFlowers', 3))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={flowersData}
        />
        <PicturesContent
          displayedData={flowers}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
        <WhatsApp />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default PageFlowers

