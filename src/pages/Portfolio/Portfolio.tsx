import React from 'react'
import PagePortfolio from '../../features/Pages/PagePortfolio/PagePortfolio'

const Portfolio = () => {
  return (
    <PagePortfolio />
  )
}

export default Portfolio

// import React, { Fragment } from "react";

// import { TitlePage } from "../../features/Pages/TitlePage/TitlePage.tsx";
// import { PortfolioItem } from "../../features/Pages/PagePortfolio/PortfolioItem/PortfolioItem.tsx";
// import { WhatsApp } from "../../features/Communication/WhatsApp/WhatsApp.tsx";

// import { dataPortfolioItem } from '../../features/Pages/PagePortfolio/asd.tsx'

// const Portfolio = () => {
//   return (
//     dataPortfolioItem.map(item => {
//       return (
//         <Fragment key={item.id} >
//           <TitlePage name='Artworks' content='Page with list artworks' />
//           <PortfolioItem Component={item.Component} headText={item.headText} text={item.text} path={item.path} key={item.id} />
//           <WhatsApp />
//         </Fragment>
//       )
//     })
//   )
// }

// export default Portfolio
