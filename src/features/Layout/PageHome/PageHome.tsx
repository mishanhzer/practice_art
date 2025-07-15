import React from "react";

import { TitlePage } from "./TitlePage/TitlePage.tsx";
import { Info } from "./Info/Info.tsx";
import { WhatsApp } from "../../../components/whatsapp/WhatsApp.tsx";

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