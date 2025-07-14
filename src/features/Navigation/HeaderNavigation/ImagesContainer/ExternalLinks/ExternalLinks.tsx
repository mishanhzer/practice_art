import React from "react"

import { TypesExternalLinks } from "./types"

export const ExternalLinks = ({ source, name, link }: TypesExternalLinks) => {
  return (
    <a href={link}>
      <img className={`w-5 rounded-md`} src={source} alt={name} />
    </a>
  );
};