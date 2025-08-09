import { TypesImageButton } from './types'

import arrow from '../../../../assets/logo/logoHeader/linkBtns/arrow.png'

export const ImageButton = ({ w, h, turn, translateX }: TypesImageButton) => {
  return (
    <img
      className={`ml-2 ${w} ${h} group-hover:${translateX} group-hover: transition ${turn}`}
      src={arrow}
      alt="#"
    />
  );
};