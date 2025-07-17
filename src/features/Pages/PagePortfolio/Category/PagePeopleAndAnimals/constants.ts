import { _apiUrl } from "../../constants"

export const linkPeopleAndAnimals: string = 'https://disk.yandex.ru/d/a7CJ9FA93iy7OA'
export const pathPeopleAndAnimals: string = '/portfolio/people_and_animals/'
export const urlPeopleAndAnimals = `${_apiUrl}${linkPeopleAndAnimals}&limit=9`


export const peopleAndAnimalsDataPages = (path: string, styles: string, setOnePage: () => void) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
  ]
}