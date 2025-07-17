import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { Spinner } from "../../features/UI/Spinner/Spinner.tsx";
// import { AppHeader } from "../appHeader/AppHeader";
// import { NavigateMenu } from "../navigateMenu/NavigateMenu";

// const Home = lazy(() => import('../pages/Home/Home.tsx'));
// const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio.tsx'));
// const Animals = lazy(() => import('../pages/Portfolio/Animals/Animals.tsx'));
// const Flowers = lazy(() => import('../pages/Portfolio/Flowers/Flowers.tsx'));
// const StillLife = lazy(() => import('../pages/Portfolio/StillLife/StillLife.tsx'));
// const PeopleAndAnimals = lazy(() => import('../pages/Portfolio/PeopleAndAnimals/PeopleAndAnimals.tsx'));
const Portfolio = lazy(() => import('../../pages/Portfolio/Portfolio.tsx'));
const Animals = lazy(() => import('../../pages/Animals/Animals.tsx'));
const Flowers = lazy(() => import('../../pages/Flowers/Flowers.tsx'));
const StillLife = lazy(() => import('../../pages/StillLife/StillLife.tsx'));
const PeopleAndAnimals = lazy(() => import('../../pages/PeopleAndAnimals/PeopleAndAnimals.tsx'));

const ContactMeAnt = lazy(() => import('../pages/ContactMe/ContactMeAnt.tsx'));
const About = lazy(() => import('../pages/About/About.tsx'))
const Shop = lazy(() => import('../pages/shop/Shop.tsx'))
const ShopAnimals = lazy(() => import('../pages/shop/categories/ShopAnimals/ShopAnimals.tsx'))
const ShopFlowers = lazy(() => import('../pages/shop/categories/ShopFlowers/ShopFlowers.tsx'))
const ShopStillLife = lazy(() => import('../pages/shop/categories/ShopStillLife/ShopStillLife.tsx'))
const ShopPeopleAndAnimals = lazy(() => import('../pages/shop/categories/ShopPeopleAndAnimals/ShopPeopleAndAnimals.tsx'))
const Cart = lazy(() => import('../pages/Cart/Cart.tsx'))

const Header = lazy(() => import('../../features/Navigation/HeaderNavigation/Header.tsx'));
const NavigationMenu = lazy(() => import('../../features/Navigation/NavigationMenu/NavigationMenu.tsx'));

const Home = lazy(() => import('../../pages/Home/Home.tsx'));

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className={`w-full`}>
        {/* <AppHeader /> */}
        {/* <NavigateMenu /> */}
        <Header />
        <NavigationMenu />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<ContactMeAnt />} />
            <Route path='/home' element={<Home />} />

            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/animals' element={<Animals />}>
              <Route path=':id' element={<Animals />} />
            </Route>
            <Route path='/portfolio/flowers' element={<Flowers />}>
              <Route path=':id' element={<Flowers />} />
            </Route>
            <Route path='/portfolio/still_life' element={<StillLife />}>
              <Route path=':id' element={<StillLife />} />
            </Route>
            <Route path='/portfolio/people_and_animals/1' element={<PeopleAndAnimals />} />

            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/shop_animals' element={<ShopAnimals />} />
            <Route path='/shop/shop_flowers' element={<ShopFlowers />} />
            <Route path='/shop/shop_still_life' element={<ShopStillLife />} />
            <Route path='/shop/shop_people_and_animals' element={<ShopPeopleAndAnimals />} />

            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
