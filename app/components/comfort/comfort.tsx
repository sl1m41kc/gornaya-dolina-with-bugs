import React from 'react';
import classes from './comfort.module.css';
import { data } from '@/data/data';
import ComfortItem from './comfort-item/comfort-item';
import clsx from 'clsx';
import { Title } from '../UI/Title/Title';

const Comfort = () => {
  return (
    <section className={clsx('container', classes.container)} id="camping">
      <div className="containerText">
        <Title>Активный отдых</Title>
        <p>
          Мы радостью поможем вам организовать увлекательный
          активный отдых сплавы по живописным рекам пешие и конные
          прогулки для знакомства с красотой алтайской<br/> природы. Для
          любителей адреналина есть туры на квадроциклах открывающие
          возможность исследовать самые отдаленные уголки и почувствовать
          дух настоящих приключений. Независимо от ваших предпочтений
          с нами ваш отдых будет насыщенным и запоминающимся
        </p>
      </div>

      <div className={classes.campingTypes}>
        {data.comfortPage.map((item, index) => (
          <ComfortItem
            type={item.type}
            key={String(index) + item.title}
            icon={item.icon}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Comfort;
