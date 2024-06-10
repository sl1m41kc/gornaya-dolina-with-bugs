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
          Добро пожаловать в&nbsp;Горную долину, где природа и&nbsp;комфорт
          встречаются в&nbsp;идеальной гармонии. Представьте себе утро, когда
          вы&nbsp;просыпаетесь в&nbsp;уютном домике с&nbsp;панорамными окнами,
          через которые открывается захватывающий вид на&nbsp;величественные
          горы. Здесь вы&nbsp;сможете наслаждаться рассветом, заливающим вершины
          золотистым светом, и&nbsp;вечерними сумерками, придающими горам
          мистическое очарование.
        </p>
        <p>
          Отдых у&nbsp;нас&nbsp;&mdash; это уникальная возможность насладиться
          красотой Алтая, погрузиться в&nbsp;атмосферу спокойствия и&nbsp;уюта,
          и&nbsp;создать незабываемые воспоминания.
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
