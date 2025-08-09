import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { Widget } from "../../ui/Widget/Widget.tsx";
import { PicturesContent } from "../../../../UI/PicturesContent/PicturesContent.tsx";
import { Spinner } from "../../../../UI/Spinner/Spinner.tsx";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp.tsx";

import { useAnimalsSelectors } from "./selectors/animalsSelectors.tsx";
import { usePortfolioCommonSelectors } from "../../selectors/commonSelectors.tsx"

import { urlAnimals, pathAnimals, animalsDataPages } from "./constants.ts";

import styles from '../../portfolio.module.scss'

const PageAnimals = () => {
  const { animals, offsetAnimals } = useAnimalsSelectors()
  const { loading, getData } = usePortfolioCommonSelectors()

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
    animalsDataPages(pathAnimals, styles.item,
      () => getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals', 1),
      () => getData('animals', urlAnimals, 'offsetAnimals', 9, 'pageAnimals', 2),
      () => getData('animals', urlAnimals, 'offsetAnimals', 18, 'pageAnimals', 3),
      () => getData('animals', urlAnimals, 'offsetAnimals', 27, 'pageAnimals', 4),
      () => getData('animals', urlAnimals, 'offsetAnimals', 36, 'pageAnimals', 5),
      () => getData('animals', urlAnimals, 'offsetAnimals', 45, 'pageAnimals', 6))

  const Content = () => {
    return (
      <>
        <Widget
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={animalsData}
        />
        <PicturesContent
          displayedData={animals}
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
