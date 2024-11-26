import React from "react";
import classes from "./contacts.module.css";

import PhoneSVG from "@/public/sprites/icons/phone.svg";
import LocationSVG from "@/public/sprites/icons/location.svg";
import NavigationSVG from "@/public/sprites/icons/navigation.svg";

import WhatsAppSVG from "@/public/sprites/social/whatsapp.svg";
import VKSVG from "@/public/sprites/social/vk.svg";
import YandexSVG from "@/public/sprites/social/yandex_maps.svg";
import GISSVG from "@/public/sprites/social/2gis.svg";

import { data } from "@/data/data";
import clsx from "clsx";
import { Title } from "../UI/Title/Title";

const Contacts = () => {
  const social = data.socialMedia
  const navigation = data.navigation

  return (
    <section className={clsx("container", classes.container)} id="contacts">
      <Title>Контакты</Title>

      <div className={classes.contacts}>
        <div className={classes.map}>
          <iframe
            className={classes.iframe}
            src={navigation.map}
          />
        </div>

        <div className={classes.info}>
          <div className={classes.infoItem}>
            <div className={classes.phone}>
              <div className={classes.infoHeader}>
                <p>Телефон</p>
              </div>
              <a className={clsx(classes.phoneLink, 'mylink')} href={social.phone.link}>
                {social.phone.number}
              </a>
            </div>
            <div className={classes.social}>
              <a
                target="_blank"
                href={social.whatsapp}
              >
                <WhatsAppSVG />
              </a>
              <a target="_blank" href={social.vk}>
                <VKSVG />
              </a>
            </div>
          </div>
          <div className={classes.infoItem}>
            <div className={classes.address}>
              <div className={classes.infoHeader}>
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
                <a href={navigation.yandexnavi}>
                  <YandexSVG />
                </a>
                <a href={navigation.twogis}>
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
