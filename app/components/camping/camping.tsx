import React from "react";
import classes from "./camping.module.css";
import KayakingSVG from "@/public/sprites/icons/kayaking.svg";
import HikingSVG from "@/public/sprites/icons/hiking.svg";
import MotorSportSVG from "@/public/sprites/icons/motorsport.svg";
import Image from "next/image";
import { data } from "@/data/data";
import CampingItem from "./camping-item/camping-item";

const Camping = () => {
  return (
    <section className="container">
      <div className="containerText">
        <h2 className="title">Активный отдых</h2>
        <p>
          Каждый домик оборудован большими панорамными окнами, через которые
          открывается захватывающий вид на величественные горы. Представьте
          себе, как вы просыпаетесь утром и видите рассвет, заливающий вершины
          золотистым светом, или как вечерние сумерки придают горам мистическое
          очарование.
        </p>
      </div>

      <div className={classes.campingTypes}>
        {data.camping.map((item) => (
          <CampingItem 
          icon={item.icon}
          title={item.title}
          imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Camping;
