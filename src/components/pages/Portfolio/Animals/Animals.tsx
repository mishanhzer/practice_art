import React, { use, useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'
import { useTest } from '../../../../utils/useTest.ts'

import { Spinner } from "../../../spinner/Spinner.tsx";
import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { goBack, animalsForward, goStart, animalsEnd, animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

import styles from '../styles/mainStylesPictures.module.scss'

import useHttp from '../../../../hooks/http.hook.ts';

const pathAnimals: string = '/portfolio/animals/'

import { urlAnimals } from "../../../../utils/useTest.ts";
import { off } from "process";
import { get } from "http";


const Animals = () => {
  const animals = useAnimalStore(state => state.animals)

  const loadingTest = useAnimalStore(state => state.loadingTest)
  const getAnimals = useAnimalStore(state => state.getAnimals)
  const offset = useAnimalStore(state => state.offset)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  // Добавить в useEffect вызов запроса
  useEffect(() => {
    navigate(`${pathAnimals}1`)
    getAnimals(urlAnimals, 0)
  }, [])

  const getPrev = () => {
    if (offset === 0) {
      getAnimals(urlAnimals, 0)
      navigate(`${pathAnimals}1`)
    }
    if (offset > 0) {
      getAnimals(urlAnimals, offset - 9)
      navigate(`${pathAnimals}${idTest - 1}`)
    }
  }

  const getNext = () => {
    if (offset >= 45) {
      getAnimals(urlAnimals, 45)
      navigate(`${pathAnimals}6`)
    }
    if (offset >= 0) {
      getAnimals(urlAnimals, offset + 9)
      navigate(`${pathAnimals}${idTest + 1}`)
    }
  }

  const getStart = () => {
    getAnimals(urlAnimals, 0)
    navigate(`${pathAnimals}1`)
  }

  const getEnd = () => {
    getAnimals(urlAnimals, 45)
    navigate(`${pathAnimals}6`)
  }

  const animalsData = animalsDataPages(pathAnimals, styles.listItems, () => getAnimals(urlAnimals, 0), () => getAnimals(urlAnimals, 9), () => getAnimals(urlAnimals, 18), () => getAnimals(urlAnimals, 27), () => getAnimals(urlAnimals, 36), () => getAnimals(urlAnimals, 45))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          getNext={getNext}
          getPrev={getPrev}
          dataPages={animalsData}
        />
        <PicturesContent
          displayedData={animals}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
      </>
    )
  }

  return (
    loadingTest === 'loading' ? <Spinner /> : <Content />
  )
}

export default Animals







// import React, { use, useEffect, useState } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';

// import { useAnimalStore } from '../../../../store/store'
// import { useTest } from '../../../../utils/useTest.ts'

// import { Spinner } from "../../../spinner/Spinner.tsx";
// import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

// import { goBack, animalsForward, goStart, animalsEnd, animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
// import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

// import styles from '../styles/mainStylesPictures.module.scss'

// import useHttp from '../../../../hooks/http.hook.ts';

// const pathAnimals: string = '/portfolio/animals/'


// const Animals = () => {
//   const animals = useAnimalStore(state => state.animals)
//   console.log(animals)
//   const loadingTest = useAnimalStore(state => state.loadingTest)
//   // const setVisiblePage = useAnimalStore(state => state.setVisiblePage)

//   const setVisibleDisplay = useAnimalStore(state => state.setVisibleDisplay)

//   const getAnimalsFirstPage = useAnimalStore(state => state.getAnimalsFirstPage)
//   const getAnimalsSecondPage = useAnimalStore(state => state.getAnimalsSecondPage)
//   const getAnimalsThirdPage = useAnimalStore(state => state.getAnimalsThirdPage)
//   const getAnimalsFourthPage = useAnimalStore(state => state.getAnimalsFourthPage)
//   const getAnimalsFifthPage = useAnimalStore(state => state.getAnimalsFifthPage)
//   const getAnimalsSixthPage = useAnimalStore(state => state.getAnimalsSixthPage)

//   const getPrevAnimals = useAnimalStore(state => state.getPrevAnimals)
//   const getNextAnimals = useAnimalStore(state => state.getNextAnimals)

//   const navigate = useNavigate()
//   const location = useLocation()

//   const pathName: string = location.pathname.slice(0, 19)
//   const idTest: number = +location.pathname.slice(19, 21)

//   // Добавить в useEffect вызов запроса
//   useEffect(() => {
//     getAnimalsFirstPage()
//   }, [])


//   const handleClickBack = () => {
//     goBack(`${pathAnimals}1`, getAnimalsFirstPage, getPrevAnimals, setVisibleDisplay, navigate, pathName, idTest)
//     getPrevAnimals()
//   }

//   const handleClickForward = () => {
//     animalsForward(`${pathAnimals}6`, getNextAnimals, setVisibleDisplay, navigate, pathName, idTest, getAnimalsSixthPage)
//     getNextAnimals()
//   }

//   const handleClickStart = () => {
//     goStart(`${pathAnimals}1`, getAnimalsFirstPage, navigate)
//   }

//   const handleClickEnd = () => {
//     animalsEnd(`${pathAnimals}6`, getAnimalsSixthPage, navigate)
//   }

//   const animalsData = animalsDataPages(pathAnimals, styles.listItems, getAnimalsFirstPage, getAnimalsSecondPage, getAnimalsThirdPage, getAnimalsFourthPage, getAnimalsFifthPage, getAnimalsSixthPage)

//   const Content = () => {
//     return (
//       <>
//         <WidgetPages
//           handleClickStart={handleClickStart}
//           handleClickBack={handleClickBack}
//           handleClickForward={handleClickForward}
//           handleClickEnd={handleClickEnd}
//           dataPages={animalsData}
//         />
//         <PicturesContent
//           displayedData={animals}
//           stylesContainer={styles.container}
//           stylesWrapperImg={styles.wrapperImg}
//         />
//       </>
//     )
//   }

//   return (
//     loadingTest === 'loading' ? <Spinner /> : <Content />
//   )
// }

// export default Animals










// import React, { use, useState } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';

// import { useAnimalStore } from '../../../../store/store'
// import { useTest } from '../../../../utils/useTest.ts'

// import { Spinner } from "../../../spinner/Spinner.tsx";
// import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

// import { callFuncLoading, goBack, animalsForward, goStart, animalsEnd, animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
// import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

// import styles from '../styles/mainStylesPictures.module.scss'

// import useHttp from '../../../../hooks/http.hook.ts';

// const pathAnimals: string = '/portfolio/animals/'


// const Animals = () => {
//   const animals = useAnimalStore(state => state.animals)
//   const response = useAnimalStore(state => state.response)
//   const getAnimals = useAnimalStore(state => state.getAnimals)
//   const loadingTest = useAnimalStore(state => state.loadingTest)
//   const setLoadingLoading = useAnimalStore(state => state.setLoadingLoading)
//   const setLoadingConfirmed = useAnimalStore(state => state.setLoadingConfirmed)

//   console.log(animals)
//   console.log(response)
//   console.log(loadingTest)

//   const [loading, setLoading] = useState(false)
//   const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData);

//   const setPrevPage = useAnimalStore(state => state.setPrevPage)
//   const setNextPage = useAnimalStore(state => state.setNextPage)
//   const setVisibleDisplay = useAnimalStore(state => state.setVisibleDisplay)

//   const setOnePage = useAnimalStore(state => state.setOnePage)
//   const setTwoPage = useAnimalStore(state => state.setTwoPage)
//   const setThreePage = useAnimalStore(state => state.setThreePage)
//   const setFourPage = useAnimalStore(state => state.setFourPage)
//   const setFivePage = useAnimalStore(state => state.setFivePage)
//   const setSixPage = useAnimalStore(state => state.setSixPage)

//   const navigate = useNavigate()
//   const location = useLocation()

//   const pathName: string = location.pathname.slice(0, 19)
//   const idTest: number = +location.pathname.slice(19, 21)


//   const handleClickBack = () => {
//     setLoading(true)
//     if (response === 200) {
//       setLoadingLoading()
//       goBack(setLoading, `${pathAnimals}1`, setOnePage, setPrevPage, setVisibleDisplay, navigate, pathName, idTest)
//       getAnimals()
//       setLoadingConfirmed()
//     }
//   }

//   const handleClickForward = () => {
//     animalsForward(setLoading, `${pathAnimals}6`, setNextPage, setVisibleDisplay, navigate, pathName, idTest, setSixPage)
//   }

//   const handleClickStart = () => {
//     goStart(setLoading, `${pathAnimals}1`, setOnePage, navigate)
//   }

//   const handleClickEnd = () => {
//     animalsEnd(setLoading, `${pathAnimals}6`, setSixPage, navigate)
//   }

//   const animalsData = animalsDataPages(pathAnimals, styles.listItems, setOnePage, setTwoPage, setThreePage, setFourPage, setFivePage, setSixPage)

//   const Content = () => {
//     return (
//       <>
//         <WidgetPages
//           handleClickStart={handleClickStart}
//           handleClickBack={handleClickBack}
//           handleClickForward={handleClickForward}
//           handleClickEnd={handleClickEnd}
//           callFuncLoading={() => callFuncLoading(setLoading)}
//           dataPages={animalsData}
//         />
//         <PicturesContent
//           displayedData={animalDisplayedData}
//           stylesContainer={styles.container}
//           stylesWrapperImg={styles.wrapperImg}
//         />
//       </>
//     )
//   }

//   return (
//     loading ? <Spinner /> : <Content />
//   )
// }

// export default Animals
