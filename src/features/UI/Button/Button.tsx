import { twMerge } from "tailwind-merge";

import { ImageButton } from './ImageButton/ImageButton'

import { TypesButton } from './types'

import styles from './button.module.scss'

export const Button = ({ mt, h, fz, disabled, mx, textBtn, turn, translateX, func }: TypesButton) => {
  return (
    <div>
      <button
        onClick={func}
        disabled={disabled}
        className={twMerge(mt, h, fz, mx, styles.button)}
        type="submit"
      >
        {textBtn}
        <ImageButton w="w-5" h="h-5" turn={turn} translateX={translateX} />
      </button>
    </div>
  );
};