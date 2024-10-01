'use client';

import useScreenWidth from '@/app/utils/use-screen-width';
import MySwiper from '../swiper/swiper';
import Review from './review/review';
import classes from './reviews.module.css';
import { data } from '@/data/data';
import clsx from 'clsx';
import { Title } from '../UI/Title/Title';

const Reviews = () => {
  const screenWidth = useScreenWidth();

  return (
    <section
      className={clsx('container', 'fullW', classes.container)}
      id="reviews"
    >
      <Title>Отзывы</Title>

      <div className={classes.containerReviews}>
        <MySwiper
          data={data.reviews}
          nameSwiper="swiperReviews"
          slidesPewView={screenWidth <= 1024 && screenWidth !== 0 ? 1.5 : 2.2}
          slide={(item: any, index: number) => (
            <Review key={index + item.name} item={item} />
          )}
        />
      </div>
    </section>
  );
};

export default Reviews;
