import React from "react";

import { usePortfolioAnimalsSelector, usePortfolioFlowersSelector, usePortfolioStillLifeSelector, usePortfolioPeopleAndAnimalsSelector } from "./selectors/portfolioSelectors.tsx";

import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from './constants.ts'

import portfolioAnimals from '../../../assets/images'
import portfolioFlowers from '../../../assets/images/portfolioImages/portfolioFlowers.jpg'
import portfolioStillLife from '../../assets/images/portfolioImages/portfolioStillLife.jpg'
import portfolioPeopleAndAnimals from '../../assets/images/portfolioImages/portfolioPeopleAndAnimals.jpg'

import { PortfolioImage } from './PortfolioImage/PortfolioImage.tsx'

const pageAnimals = usePortfolioAnimalsSelector()
const pageFlowers = usePortfolioFlowersSelector()
const pageStillLife = usePortfolioStillLifeSelector()
const pagePeopleAndAnimals = usePortfolioPeopleAndAnimalsSelector()

export const dataPortfolioItem = [
  { Component: <PortfolioImage src={portfolioAnimals} alt='Animals' />, headText: 'Animals', text: descriptionAnimals, path: `/portfolio/animals/${pageAnimals}`, id: 0 },
  { Component: <PortfolioImage src={portfolioFlowers} alt='Flowers' />, headText: 'Flowers', text: descriptionFlowers, path: `/portfolio/flowers/${pageFlowers}`, id: 1 },
  { Component: <PortfolioImage src={portfolioStillLife} alt='StillLife' />, headText: 'StillLife', text: descriptionStillLife, path: `/portfolio/still_life/${pageStillLife}`, id: 2 },
  { Component: <PortfolioImage src={portfolioPeopleAndAnimals} alt='PeopleAndAnimals' />, headText: 'PeopleAndAnimals', text: descriptionStillLife, path: `/portfolio/people_and_animals/${pagePeopleAndAnimals}`, id: 3 }
]