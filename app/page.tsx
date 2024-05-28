import AboutUs from "./components/about-us/about-us";
import Camping from "./components/camping/camping";
import Header from "./components/header/header";
import Houses from "./components/houses/houses";
import Main from "./components/main/main";
import PhotoGallery from "./components/photo-gallery/photo-gallery";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Reviews from "./components/reviews/reviews";
import Contacts from "./components/contacts/contacts";
import Footer from "./components/footer/footer";
import HorseBlock from "./components/horse-block/horse-block";
import { data } from "@/data/data";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Houses />
      <AboutUs />
      <PhotoGallery title={'Фотогалерея'} data={data.gallery} nameGallery="photoGallery" />
      <Camping />
      <Reviews />
      <HorseBlock />
      <Contacts />
      <Footer />
    </div>
  );
}
