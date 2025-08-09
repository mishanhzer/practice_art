import { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { Widget } from "../../ui/Widget/Widget.tsx";
import { Spinner } from "../../../../UI/Spinner/Spinner.tsx";
import { PicturesContent } from "../../../../UI/PicturesContent/PicturesContent.tsx";
import { WhatsApp } from "../../../../Communication/WhatsApp/WhatsApp.tsx";

import { useStillLifeSelectors } from "./selectors/stillLifeSelectors.tsx";
import { usePortfolioCommonSelectors } from "../../selectors/commonSelectors.tsx";

import { pathStillLife, stillLifeDataPages, urlStillLife } from './constants.ts'

import styles from '../../portfolio.module.scss'

const PageStillLife = () => {
  const { stillLife, offsetStillLife } = useStillLifeSelectors()
  const { loading, getData } = usePortfolioCommonSelectors()

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
    stillLifeDataPages(pathStillLife, styles.item,
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 0, 'pageStillLife', 1),
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 9, 'pageStillLife', 2))

  const Content = () => {
    return (
      <>
        <Widget
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={stillLifeData}
        />
        <PicturesContent
          displayedData={stillLife}
        />
        <WhatsApp />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default PageStillLife
