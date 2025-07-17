import { _apiUrl } from "../../constants"

export const linkFlowers: string = 'https://disk.yandex.ru/d/59Fax6UsF26zww'
export const pathFlowers: string = '/portfolio/flowers/'
export const urlFlowers = `${_apiUrl}${linkFlowers}&limit=9`

export const flowersDataPages = (path: string, styles: string, getFlowersFirstPage: () => void, getFlowersSecondPage: () => void, getFlowersThirdPage: () => void) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: getFlowersFirstPage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: getFlowersSecondPage },
    { path: `${path}3`, name: 3, source: '', class: styles, func: getFlowersThirdPage },
  ]
}