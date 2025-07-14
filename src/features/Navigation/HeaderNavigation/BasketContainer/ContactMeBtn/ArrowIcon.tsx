import React from "react";
import { arrow } from "../../../../../assets/logo/logo";

import { ImageTypes } from "./types";

export const ImageBtn = ({ w, h, turn, translateX }: ImageTypes) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:${translateX} group-hover: transition ${turn}`}
      src={arrow}
      alt="#"
    />
  );
};