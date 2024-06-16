import React from "react";
import Advantages from "../advantages/advantages";
import { data } from "@/data/data";

const AboutUs = () => {
  return (
    <section className="container fullW" id="about-us">
      <div className="container containerText">
        <h2 className="title">О нашей базе</h2>
        <p>
          Для семей с&nbsp;детьми у&nbsp;нас есть детская площадка, где малыши
          смогут вдоволь порезвиться на&nbsp;свежем воздухе. Взрослые
          и&nbsp;дети оценят бассейн, идеально подходящий для освежающего отдыха
          среди живописной природы. А&nbsp;общая кухня, оборудованная всем
          необходимым, позволяет готовить любимые блюда и&nbsp;устраивать
          душевные обеды и&nbsp;ужины в&nbsp;кругу близких и&nbsp;новых друзей.
        </p>
      </div>

      <Advantages />
    </section>
  );
};

export default AboutUs;
