import React, { Fragment } from "react";

import { TitlePage } from "../TitlePage/TitlePage.tsx";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem.tsx";
import { WhatsApp } from "../../Communication/WhatsApp/WhatsApp.tsx";

import { PortfolioImage } from './PortfolioImage/PortfolioImage.tsx'
import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from './descriptionGroupsPicture.ts'

import { usePortfolioAnimalsSelector, usePortfolioFlowersSelector, usePortfolioStillLifeSelector, usePortfolioPeopleAndAnimalsSelector } from "./selectors/portfolioSelectors.tsx";

import portfolioAnimals from '../../../assets/images'
import portfolioFlowers from '../../../assets/images/portfolioImages/portfolioFlowers.jpg'
import portfolioStillLife from '../../assets/images/portfolioImages/portfolioStillLife.jpg'
import portfolioPeopleAndAnimals from '../../assets/images/portfolioImages/portfolioPeopleAndAnimals.jpg'

const Portfolio = () => {
  const pageAnimals = usePortfolioAnimalsSelector()
  const pageFlowers = usePortfolioFlowersSelector()
  const pageStillLife = usePortfolioStillLifeSelector()
  const pagePeopleAndAnimals = usePortfolioPeopleAndAnimalsSelector()

  const dataPortfolioItem = [
    { Component: <PortfolioImage src={portfolioAnimals} alt='Animals' />, headText: 'Animals', text: descriptionAnimals, path: `/portfolio/animals/${pageAnimals}`, id: 0 },
    { Component: <PortfolioImage src={portfolioFlowers} alt='Flowers' />, headText: 'Flowers', text: descriptionFlowers, path: `/portfolio/flowers/${pageFlowers}`, id: 1 },
    { Component: <PortfolioImage src={portfolioStillLife} alt='StillLife' />, headText: 'StillLife', text: descriptionStillLife, path: `/portfolio/still_life/${pageStillLife}`, id: 2 },
    { Component: <PortfolioImage src={portfolioPeopleAndAnimals} alt='PeopleAndAnimals' />, headText: 'PeopleAndAnimals', text: descriptionStillLife, path: `/portfolio/people_and_animals/${pagePeopleAndAnimals}`, id: 3 }
  ]

  return (
    dataPortfolioItem.map(item => {
      return (
        <Fragment key={item.id} >
          <TitlePage name='Artworks' content='Page with list artworks' />
          <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} path={item.path} key={item.id} />
          <WhatsApp />
        </Fragment>
      )
    })
  )
}

export default Portfolio
