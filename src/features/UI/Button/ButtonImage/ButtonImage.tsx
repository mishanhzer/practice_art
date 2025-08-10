import { TypesButtonImage } from './types'

import arrow from '../../../../assets/logo/logoHeader/linkBtns/arrow.png'

export const ButtonImage = ({ w, h, turn, translateX }: TypesButtonImage) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:${translateX} group-hover: transition ${turn}`}
      src={arrow}
      alt="#"
    />
  );
};