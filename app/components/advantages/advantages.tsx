'use client';
import classes from './advantages.module.css';
import MySwiper from '../swiper/swiper';
import clsx from 'clsx';
import { data } from '@/data/data';
import { Philosopher } from '@/app/fonts/fonts';
import { useMobileContext } from '@/app/utils/adaptive/MobileContext';
import { IAdvantages } from '@/data/list-advantages/types';

const Advantages = () => {
  const { isMobile } = useMobileContext();

  const renderAdvantageItem = (item: IAdvantages, index: number) => (
    <div
      className={classes.item}
      key={`${index}-${String(item.title)}-${String(
        item.description
      )}-advantages`}
    >
      <div className={classes.iconWrapper}>{item.icon}</div>
      <div className={classes.textWrapper}>
        <h3 className={clsx(classes.title, Philosopher.className)}>
          {item.title}
        </h3>
        <p className={classes.description}>{item.description}</p>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className={clsx(classes.swiperWrapper)}>
        <MySwiper
          data={data.listAdvantages}
          countSlide={1}
          nameSwiper="swiperAdvantagesMain"
          slide={renderAdvantageItem}
        />
      </div>
    );
  } else {
    return (
      <div className={classes.advantages}>
        {data.listAdvantages.map(renderAdvantageItem)}
      </div>
    );
  }
};

export default Advantages;
