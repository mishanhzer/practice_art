import { _apiUrl } from "../../constants"

export const pathStillLife = '/portfolio/still_life/'
export const linkStillLife: string = 'https://disk.yandex.ru/d/5yEFzsxVPTdx7A'
export const urlStillLife = `${_apiUrl}${linkStillLife}&limit=9`

export const stillLifeDataPages = (path: string, styles: string, setOnePage: () => void, setTwoPage: () => void) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
  ]
}