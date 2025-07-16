import React from "react";

import { TitlePage } from "../../features/Pages/TitlePage/TitlePage.tsx";
import { Info } from "../../features/Pages/PageHome/Info/Info.tsx";
import { WhatsApp } from "../../features/Communication/WhatsApp/WhatsApp.tsx";

const Home = () => {
  return (
    <>
      <TitlePage name='Elena Kozyutenko' content='Main page' />
      <Info />
      <WhatsApp />
    </>
  )
}

export default Home