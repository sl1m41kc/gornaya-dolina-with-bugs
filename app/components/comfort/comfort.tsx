import React from "react";
import classes from "./comfort.module.css";
import { data } from "@/data/data";
import ComfortItem from "./comfort-item/comfort-item";

const Comfort = () => {
  return (
    <section className="container" id="camping">
      <div className="containerText">
        <h2 className="title">Активный отдых</h2>
        <p>
          Мы&nbsp;с&nbsp;радостью поможем вам организовать увлекательный
          активный отдых: сплавы по&nbsp;живописным рекам, пешие и&nbsp;конные
          прогулки для знакомства с&nbsp;красотой алтайской природы. Для
          любителей адреналина есть туры на&nbsp;квадроциклах, открывающие
          возможность исследовать самые отдаленные уголки и&nbsp;почувствовать
          дух настоящих приключений. Независимо от&nbsp;ваших предпочтений,
          с&nbsp;нами ваш отдых будет насыщенным и&nbsp;запоминающимся.
        </p>
      </div>

      <div className={classes.campingTypes}>
        {data.comfortPage.map((item, index) => (
          <ComfortItem
            type={item.type}
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

export default Comfort;
