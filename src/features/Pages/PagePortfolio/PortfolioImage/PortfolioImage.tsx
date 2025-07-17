import image from '../../../../assets/images/portfolioImages/portfolioAnimals.jpg'
import { TypeImagePortfolio } from "../types"
import React from "react"

export const PortfolioImage = ({ src, alt }: TypeImagePortfolio) => {
  return (
    <img
      className={`min-w-min w-350 h-350`}
      src={src}
      alt={alt} />
  )
}