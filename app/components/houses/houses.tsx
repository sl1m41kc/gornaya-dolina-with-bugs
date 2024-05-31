
import React from "react";
import classes from "./houses.module.css";
import HouseItem from "./house-item/house-item";
import { data } from "@/data/data";

const Houses = () => {
  return (
    <section className="container" id="houses">
      <div className="containerText">
        <h2 className="title">Размещение</h2>
        <p>
          Каждый домик оборудован большими панорамными окнами, через которые
          открывается захватывающий вид на&nbsp;величественные горы. Представьте
          себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
          вершины золотистым светом, или как вечерние сумерки придают горам
          мистическое очарование.
        </p>
        <p>
          Каждый домик оборудован большими панорамными окнами, через которые
          открывается захватывающий вид на&nbsp;величественные горы. Представьте
          себе, как вы&nbsp;просыпаетесь утром и&nbsp;видите рассвет, заливающий
          вершины золотистым светом, или как вечерние сумерки придают горам
          мистическое очарование.
        </p>
      </div>

      <div className={classes.wrapper}>
        {data.housesPage.map((house, index) => (
          <HouseItem
            key={index + house.title + house.mainImage.alt}
            subtitle={house.title}
            imageSrc={house.mainImage.src}
            href={house.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Houses;
