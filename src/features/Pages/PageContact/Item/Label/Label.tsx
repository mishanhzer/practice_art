import { LabelContainer } from './LabelContainer/LabelContainer'

import { TypesLabel } from './types'

export const Label = ({ classLabel, nameLabel }: TypesLabel) => {
  return (
    <label className={classLabel}>{<LabelContainer name={nameLabel} />}</label>
  )
}
