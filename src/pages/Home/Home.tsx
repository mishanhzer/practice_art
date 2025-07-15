import React from "react";

import { TitlePage } from "../../features/Pages/PageHome/TitlePage/TitlePage.tsx";
import { Info } from "../../features/Pages/PageHome/Info/Info.tsx";
import { WhatsApp } from "../../components/whatsapp/WhatsApp.tsx"

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