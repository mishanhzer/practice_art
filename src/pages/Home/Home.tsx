import { TitlePage } from "../../features/Pages/TitlePage/TitlePage.tsx";
import { PageHome } from "../../features/Pages/PageHome/PageHome.tsx";
import { WhatsApp } from "../../features/Communication/WhatsApp/WhatsApp.tsx";

const Home = () => {
  return (
    <>
      <TitlePage name='Elena Kozyutenko' content='Main page' />
      <PageHome />
      <WhatsApp />
    </>
  )
}

export default Home