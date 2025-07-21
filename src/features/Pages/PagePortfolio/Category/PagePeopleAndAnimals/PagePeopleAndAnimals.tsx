import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { Widget } from "../../ui/Widget/Widget.tsx";
import { Spinner } from "../../../../UI/Spinner/Spinner.tsx";
import { PicturesContent } from "../../ui/PicturesContent/PicturesContent.tsx";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp.tsx";

import { usePeopleAndAnimalsSelector, useOffsetPeopleAndAnimalsSelector } from "./selectors/peopleAndAnimalsSelectors.tsx";
import { useLoadingSelector, useGetDataSelector } from "../../selectors/commonSelectors.tsx";

import { pathPeopleAndAnimals, urlPeopleAndAnimals, peopleAndAnimalsDataPages } from "./constants.ts"

import styles from '../../portfolio.module.scss'

const PagePeopleAndAnimals = () => {
  const peopleAndAnimals = usePeopleAndAnimalsSelector()
  const offsetPeopleAndAnimals = useOffsetPeopleAndAnimalsSelector()

  const loading = useLoadingSelector()
  const getData = useGetDataSelector()

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(30, 31)

  useEffect(() => {
    navigate(`${pathPeopleAndAnimals}${pageId}`)
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', offsetPeopleAndAnimals, 'pagePeopleAndAnimals', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetPeopleAndAnimals - 9) : Math.min(0, offsetPeopleAndAnimals + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(1, pageId + 1)

    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', newOffset, 'pagePeopleAndAnimals', newPage)
    navigate(`${pathPeopleAndAnimals}${newPage}`)
  }

  const getStart = () => {
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const getEnd = () => {
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const peopleAndAnimalsData =
    peopleAndAnimalsDataPages(pathPeopleAndAnimals, styles.item,
      () => getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1))

  const Content = () => {
    return (
      <>
        <Widget
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={peopleAndAnimalsData}
        />
        <PicturesContent
          displayedData={peopleAndAnimals}
        />
        <WhatsApp />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default PagePeopleAndAnimals
