import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { WidgetPages } from "../../ui/WidgetPages/WidgetPages.tsx";
import { PicturesContent } from "../../ui/PicturesContent/PicturesContent.tsx";

import { Spinner } from "../../../../UI/Spinner/Spinner.tsx";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp.tsx";

import styles from '../../portfolio.module.scss'

import { urlAnimals, pathAnimals, animalsDataPages } from "./constants.ts";

import { useAnimalsSelector, useOffsetAnimalsSelector } from "./selectors/animalsSelectors.tsx";
import { useLoadingSelector, useGetDataSelector } from "../../selectors/commonSelectors.tsx";

const PageAnimals = () => {
  const animals = useAnimalsSelector()
  const offsetAnimals = useOffsetAnimalsSelector()

  const loading = useLoadingSelector()
  const getData = useGetDataSelector()

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathAnimals}${pageId}`)
    getData('animals', urlAnimals, 'offsetAnimals', offsetAnimals, 'pageAnimals', pageId)
  }, [])

  const getStart = () => {
    navigate(`${pathAnimals}1`)
    getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals', 1)
  }

  const getEnd = () => {
    navigate(`${pathAnimals}6`)
    getData('animals', urlAnimals, 'offsetAnimals', 45, 'pageAnimals', 6)
  }

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetAnimals - 9) : Math.min(45, offsetAnimals + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(6, pageId + 1)

    getData('animals', urlAnimals, 'offsetAnimals', newOffset, 'pageAnimals', newPage)
    navigate(`${pathAnimals}${newPage}`)
  }

  const animalsData =
    animalsDataPages(pathAnimals, styles.listItems,
      () => getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals', 1),
      () => getData('animals', urlAnimals, 'offsetAnimals', 9, 'pageAnimals', 2),
      () => getData('animals', urlAnimals, 'offsetAnimals', 18, 'pageAnimals', 3),
      () => getData('animals', urlAnimals, 'offsetAnimals', 27, 'pageAnimals', 4),
      () => getData('animals', urlAnimals, 'offsetAnimals', 36, 'pageAnimals', 5),
      () => getData('animals', urlAnimals, 'offsetAnimals', 45, 'pageAnimals', 6))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={animalsData}
        />
        <PicturesContent
          displayedData={animals}
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

export default PageAnimals
