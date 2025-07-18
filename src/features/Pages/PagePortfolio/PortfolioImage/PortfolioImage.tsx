import React from "react"

import { TypeImagePortfolio } from "../types"

export const PortfolioImage = ({ src, alt }: TypeImagePortfolio) => {
  return (
    <img
      className={`min-w-min w-350 h-350`}
      src={src}
      alt={alt} />
  )
}