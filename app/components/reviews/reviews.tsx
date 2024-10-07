'use client';
import MySwiper from '../swiper/swiper';
import Review from './review/review';
import classes from './reviews.module.css';
import { data } from '@/data/data';
import clsx from 'clsx';
import { Title } from '../UI/Title/Title';
import { useMobileContext } from '@/app/utils/adaptive/MobileContext';

const Reviews = () => {
  const {isMobile} = useMobileContext();

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
          slidesPewView={isMobile ? 1.5 : 2.2}
          slide={(item: any, index: number) => (
            <Review key={index + item.name} item={item} />
          )}
        />
      </div>
    </section>
  );
};

export default Reviews;
