import React from "react";
import classes from "./contacts.module.css";

import PhoneSVG from "@/public/sprites/icons/phone.svg";
import LocationSVG from "@/public/sprites/icons/location.svg";
import NavigationSVG from "@/public/sprites/icons/navigation.svg";

import WhatsAppSVG from "@/public/sprites/social/whatsapp.svg";
import VKSVG from "@/public/sprites/social/vk.svg";
import YandexSVG from "@/public/sprites/social/yandex_maps.svg";
import GISSVG from "@/public/sprites/social/2gis.svg";

const Contacts = () => {
  return (
    <section className="container" id="contacts">
      <h2 className="title">Контакты</h2>

      <div className={classes.contacts}>
        <div className={classes.map}>
          <iframe
            className={classes.iframe}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Af465a56366a2737d2aa927cd9a6662fb9114eae63ceff539b7d4954188a611ec&amp;source=constructor"
          />
        </div>

        <div className={classes.info}>
          <div className={classes.infoItem}>
            <div className={classes.phone}>
              <div className={classes.infoHeader}>
                <PhoneSVG className={classes.iconHeader} />
                <p>Телефон</p>
              </div>
              <a className={classes.phoneLink} href="tel:+79130196279">
                +7 (913) 019-62-79
              </a>
            </div>
            <div className={classes.social}>
              <a
                target="_blank"
                href="https://wa.me/79130196279?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."
              >
                <WhatsAppSVG />
              </a>
              <a target="_blank" href="https://vk.com/gornaya_dolina04">
                <VKSVG />
              </a>
            </div>
          </div>
          <div className={classes.infoItem}>
            <div className={classes.address}>
              <div className={classes.infoHeader}>
                <LocationSVG className={classes.iconHeader} />
                <p>Адрес</p>
              </div>
              <p className={classes.addressText}>
                с. Анос, дорога Анос-Аюла, 1км, 8
              </p>
            </div>
            <div className={classes.navigation}>
              <div className={classes.infoHeader}>
                <NavigationSVG className={classes.iconHeader} />
                <p>Построить маршрут</p>
              </div>
              <div className={classes.mapLink}>
                <a href="yandexnavi://build_route_on_map?lat_to=51.490958&lon_to=85.965114">
                  <YandexSVG />
                </a>
                <a href='https://2gis.ru/routeSearch/to/85.965511,51.490357/go'>
                  <GISSVG />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
