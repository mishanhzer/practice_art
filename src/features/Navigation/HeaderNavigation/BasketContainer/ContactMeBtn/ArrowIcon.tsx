import { ArrowIconTypes } from "./types";

import { arrow } from "../../../../../assets/logo/logo";

export const ArrowIcon = ({ w, h, turn, translateX }: ArrowIconTypes) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:${translateX} group-hover: transition ${turn}`}
      src={arrow}
      alt="#"
    />
  );
};