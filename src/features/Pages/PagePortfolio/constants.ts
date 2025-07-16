export const descriptionAnimals: string = 'animals'
export const descriptionFlowers: string = 'flowers'
export const descriptionStillLife: string = 'still life'

// API
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='

// Animals
export const pathAnimals: string = '/portfolio/animals/'
export const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
export const urlAnimals = `${_apiUrl}${linkAnimals}&limit=9`

export const animalsDataPages = (path: string, styles: string, getAnimalsFirstPage: () => void, getAnimalsSecondPage: () => void, getAnimalsThirdPage: () => void, getAnimalsFourthPage: () => void, getAnimalsFifthPage: () => void, getAnimalsSixthPage: () => void) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: getAnimalsFirstPage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: getAnimalsSecondPage},
    { path: `${path}3`, name: 3, source: '', class: styles, func: getAnimalsThirdPage },
    { path: `${path}4`, name: 4, source: '', class: styles, func: getAnimalsFourthPage },
    { path: `${path}5`, name: 5, source: '', class: styles, func: getAnimalsFifthPage },
    { path: `${path}6`, name: 6, source: '', class: styles, func: getAnimalsSixthPage },
  ]
}


