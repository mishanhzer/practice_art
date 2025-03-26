import React from "react";
import { Link } from 'react-router-dom';

import { PortfolioAnimals, PortfolioFlowers, PortfolioStillLife } from "../../../assets/images/Images";
import { descriptionAnimals, descriptionFlowers, descriptionStillLife, styleAdittionTextStyle } from './descriptionGroupsPicture.ts'

import styles from './styles/portfolio.module.scss'

interface TypesPortfolioItem {
  Component: React.ReactNode
  headText: string
  path: string
  text: string
}

export const dataPortfolioItem = [
  { Component: <PortfolioAnimals />, headText: 'Animals', text: descriptionAnimals, path: '/portfolio/animals/1', id: 0 },
  { Component: <PortfolioFlowers />, headText: 'Flowers', text: descriptionFlowers, path: '/portfolio/flowers', id: 1 },
  { Component: <PortfolioStillLife />, headText: 'StillLife', text: descriptionStillLife, path: '/portfolio/still_life', id: 2 }
]

export const PortfolioItem = ({ Component, headText, text, path }: TypesPortfolioItem) => {
  return (
    <>
      <div className={`flex my-8`}>
        <Link to={path}>{Component}</Link>
        <div className={`flex flex-col ml-5`}>
          <Link className={`text-center ${styles.portfolioHeadTextStyle}`} to={path}>{headText}</Link>
          <div className={`${styleAdittionTextStyle} ${styles.portfolioTextStyle}`}><span className={`${styles.portfolioMainTextBold}`}>{headText}</span> {text}</div>
        </div>
      </div>
    </>
  )
}

