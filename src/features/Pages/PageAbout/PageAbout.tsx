import React, { useEffect } from "react"

import { PicturesContent } from "../../UI/PicturesContent/PicturesContent"

import { LastWorks } from './LastWorks/LastWorks'
import { Header } from './Header/Header'

import { Spinner } from "../../UI/Spinner/Spinner"
import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp"

import { useWorks, useGetData, useLoading } from "./selectors/aboutSelector"

import { urlAllWorks } from './constants'

import styles from './about.module.scss'

const PageAbout = () => {
  const works = useWorks()
  const getData = useGetData()
  const loading = useLoading()

  useEffect(() => {
    getData('works', urlAllWorks, 'offsetAllWorks', 0, 'pageAllWorks')
  }, [])

  return (
    <div className={styles.containerPageAbout}>
      <Header />
      <LastWorks />
      {loading === 'loading' ?
        <Spinner /> :
        <PicturesContent
          displayedData={works} />
      }
      <WhatsApp />
    </div>
  )
}

export default PageAbout