'use client'

import AboutUs from "./components/about-us/about-us";
import Camping from "./components/comfort/comfort";
import Houses from "./components/houses/houses";
import Main from "./components/main/main";
import PhotoGallery from "./components/photo-gallery/photo-gallery";
import Reviews from "./components/reviews/reviews";
import Contacts from "./components/contacts/contacts";

import { data } from "@/data/data";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Separator from "./components/sepatator/separator";
import Scrollto from "./components/scrollto/scrollto";

export default function Home() {

  useEffect(() => {
    // Если в пути есть #{idBlock}, то сделать плавный, правильный скролл до блока
    const hash = window.location.hash
    if (hash) {
      scroller.scrollTo(hash.slice(1), {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutCubic',
        offset: -100,
      })
    }
  })

  return (
    <div className="wrapper">
      <Main imageAlt="Горная Долина" imageSrc="/images/main.jpg" isMain />
      <Houses />
      <AboutUs />
      <PhotoGallery title={'Фотогалерея'} data={data.gallery} nameGallery="photoGallery" />
      <Camping />
      <Reviews />
      <Separator />
      <Contacts />

      <Scrollto />
    </div>
  );
}
