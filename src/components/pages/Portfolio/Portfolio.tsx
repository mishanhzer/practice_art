import React, { Fragment } from "react";

import { Title } from "../../UI/LinkAndButton.tsx";
import { PortfolioItem } from "./PortfolioItem.tsx";
import { WhatsApp } from "../../whatsapp/WhatsApp.tsx";

import { useStore } from '../../../store/store.ts'

import { PortfolioAnimals, PortfolioFlowers, PortfolioStillLife, PortfolioPeopleAndAnimals } from "../../../assets/images/Images";
import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from './descriptionGroupsPicture.ts'

const Portfolio = () => {
  const pageAnimals = useStore(state => state.pageAnimals)
  const pageFlowers = useStore(state => state.pageFlowers)
  const pageStillLife = useStore(state => state.pageStillLife)
  const pagePeopleAndAnimals = useStore(state => state.pagePeopleAndAnimals)

  const dataPortfolioItem = [
    { Component: <PortfolioAnimals />, headText: 'Animals', text: descriptionAnimals, path: `/portfolio/animals/${pageAnimals}`, id: 0 },
    { Component: <PortfolioFlowers />, headText: 'Flowers', text: descriptionFlowers, path: `/portfolio/flowers/${pageFlowers}`, id: 1 },
    { Component: <PortfolioStillLife />, headText: 'StillLife', text: descriptionStillLife, path: `/portfolio/still_life/${pageStillLife}`, id: 2 },
    { Component: <PortfolioPeopleAndAnimals />, headText: 'PeopleAndAnimals', text: descriptionStillLife, path: `/portfolio/people_and_animals/${pagePeopleAndAnimals}`, id: 3 }
  ]

  return (
    dataPortfolioItem.map(item => {
      return (
        <Fragment key={item.id} >
          <Title name='Artworks' content='Page with list artworks' />
          <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} path={item.path} key={item.id} />
          <WhatsApp />
        </Fragment>
      )
    })
  )
}

export default Portfolio
