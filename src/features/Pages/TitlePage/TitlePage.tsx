import React from "react"

import { Helmet } from "react-helmet";

import { TitlePageTypes } from "./types"

export const TitlePage = ({ name, content }: TitlePageTypes) => {
  return (
    <Helmet>
      <meta
        name={name}
        content={content}
      />
      <title>{name}</title>
    </Helmet>
  )
}