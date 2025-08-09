import { NavLink } from "react-router"

import classNames from "classnames"

import { usePortofilioLinksSelectors } from "../../selectors/popupSelectors"

import { PopupActions } from 'reactjs-popup/dist/types';

import styles from '../../navigationMenu.module.scss'

export const PortoflioLinks = ({ ref }: { ref: React.RefObject<PopupActions> }) => {
  const {
    pageAnimals,
    pageFlowers,
    pageStillLife,
    pagePeopleAndAnimals
  } = usePortofilioLinksSelectors()

  const handleClick = () => {
    if (ref.current) {
      ref.current.close();
    }
  }

  const dataPortfolioLinks = [
    { name: 'Animals', path: `/portfolio/animals/${pageAnimals === 0 ? 1 : pageAnimals}`, class: styles.portfolioLinks, func: handleClick },
    { name: 'Flowers', path: `/portfolio/flowers/${pageFlowers === 0 ? 1 : pageFlowers}`, class: styles.portfolioLinks, func: handleClick },
    { name: 'Still life', path: `/portfolio/still_life/${pageStillLife === 0 ? 1 : pageStillLife}`, class: styles.portfolioLinks, func: handleClick },
    { name: 'People and Animals', path: `/portfolio/people_and_animals/${pagePeopleAndAnimals === 0 ? 1 : pagePeopleAndAnimals}`, class: styles.portfolioLinks, func: handleClick },
  ]

  return (
    <>
      {dataPortfolioLinks.map((item) => {
        return (
          <NavLink
            key={item.name}
            onClick={item.func}
            className={({ isActive }) => isActive
              ? classNames(item.class, styles.activeCategory)
              : classNames(item.class, styles.notActiveCategory)}
            to={item.path}>{item.name}
          </NavLink>
        )
      })}
    </>
  )
}