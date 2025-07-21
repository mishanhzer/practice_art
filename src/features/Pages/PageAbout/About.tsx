import React, { useEffect } from "react"

import { PicturesContent } from "../Portfolio/additionalUI/picturesContent/PicturesContent"

import { LastWorks } from './LastWorks/LastWorks'
import { Header } from './Header/Header'

import { Spinner } from "../../UI/Spinner/Spinner"
import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp"

import { useWorks, useGetData, useLoading } from "./selectors/aboutSelector"

import { urlAllWorks } from './constants'

import styles from './about.module.scss'

const About = () => {
  const works = useWorks()
  const getData = useGetData()
  const loading = useLoading()

  useEffect(() => {
    getData('works', urlAllWorks, 'offsetAllWorks', 0, 'pageAllWorks')
  }, [])

  return (
    <div className="pb-[100px]">
      <AboutHeader />
      <LastWorksHeader />
      {loading === 'loading' ?
        <Spinner /> :
        <PicturesContent
          stylesContainer={styles.lastWorksContainer}
          displayedData={works}
          stylesWrapperImg={styles.wrapperImg} />
      }
      <WhatsApp />
    </div>
  )
}

export default About