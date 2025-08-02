import { TypesButtonCart } from './types'

export const ButtonCart = ({ item, testClick, btnText, style, img }: TypesButtonCart) => {
  return (
    <button
      className={style}
      disabled={item.salary ? false : true}
      onClick={testClick}
      data-id={item.id}
    >
      <span className={`mr-[0.7rem]`}>{img()}</span>
      {btnText}
    </button>
  )
}
