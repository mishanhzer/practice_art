import { FormItem } from "react-hook-form-antd";

import { Label } from "./Label/Label";

import { TypesItem } from './types'

export const Item = ({ control, styles, input, name, nameLabel, addStyle }: TypesItem) => {
  return (
    <FormItem
      control={control}
      name={name}
      className={`w-[500px] ${addStyle} ${styles.itemForm}`}
    >
      <Label classLabel={styles.labelAnt} nameLabel={nameLabel} />
      {input}
    </FormItem>
  )
}