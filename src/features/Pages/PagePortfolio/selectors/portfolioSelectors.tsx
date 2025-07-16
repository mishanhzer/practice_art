import React from "react";
import { useStore } from "../../../store/store.ts";

import { PortfolioImage } from "../PortfolioImage/PortfolioImage.js";

import portfolioAnimals from '../../../../assets/images/portfolioImages/portfolioAnimals.jpg'
import portfolioFlowers from '../../../../assets/images/portfolioImages/portfolioFlowers.jpg'
import portfolioStillLife from '../../../assets/images/portfolioImages/portfolioStillLife.jpg'
import portfolioPeopleAndAnimals from '../../../assets/images/portfolioImages/portfolioPeopleAndAnimals.jpg'

import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from '../constants.js'

export const usePortfolioAnimalsSelector = () => {
  const pageAnimals = useStore(state => state.pageAnimals)
  return pageAnimals
}

export const usePortfolioFlowersSelector = () => {
  const pageFlowers = useStore(state => state.pageFlowers)
  return pageFlowers
}

export const usePortfolioStillLifeSelector = () => {
  const pageStillLife = useStore(state => state.pageStillLife)
  return pageStillLife
}

export const usePortfolioPeopleAndAnimalsSelector = () => {
  const pagePeopleAndAnimals = useStore(state => state.pagePeopleAndAnimals)
  return pagePeopleAndAnimals
}



