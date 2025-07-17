import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";
import { WhatsApp } from "../../../whatsapp/WhatsApp.tsx";

import styles from '../mainStylesPictures.module.scss'

import { pathStillLife, stillLifeDataPages, urlStillLife } from './constants.ts'

import { useStillLifeSelector, useOffsetStillLifeSelector } from "./selectors/stillLifeSelectors.tsx";
import { useLoadingSelector, useGetDataSelector } from "../../selectors/commonSelector.tsx";

const StillLife = () => {
  const stillLife = useStillLifeSelector()
  const offsetStillLife = useOffsetStillLifeSelector()

  const loading = useLoadingSelector()
  const getData = useGetDataSelector()

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(22, 23)

  useEffect(() => {
    navigate(`${pathStillLife}${pageId}`)
    getData('stillLife', urlStillLife, 'offsetStillLife', offsetStillLife, 'pageStillLife', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetStillLife - 9) : Math.min(9, offsetStillLife + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(2, pageId + 1)

    getData('stillLife', urlStillLife, 'offsetStillLife', newOffset, 'pageStillLife', newPage)
    navigate(`${pathStillLife}${newPage}`)
  }

  const getStart = () => {
    getData('stillLife', urlStillLife, 'offsetStillLife', 0, 'pageStillLife', 1)
    navigate(`${pathStillLife}1`)
  }

  const getEnd = () => {
    getData('stillLife', urlStillLife, 'offsetStillLife', 9, 'pageStillLife', 2)
    navigate(`${pathStillLife}2`)
  }

  const stillLifeData =
    stillLifeDataPages(pathStillLife, styles.listItems,
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 0, 'pageStillLife', 1),
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 9, 'pageStillLife', 2))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={stillLifeData}
        />
        <PicturesContent
          displayedData={stillLife}
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

export default StillLife
