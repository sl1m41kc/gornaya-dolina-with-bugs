import React from "react";
import classes from "./camping.module.css";
import { data } from "@/data/data";
import CampingItem from "./camping-item/camping-item";

const Camping = () => {
  return (
    <section className="container" id="camping">
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
        {data.camping.map((item, index) => (
          <CampingItem
            key={String(index) + item.title}
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
