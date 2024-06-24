import { useState } from "react";

import dynamic from 'next/dynamic'
const Modal = dynamic(() => import('@/app/components/modal/modal'), { ssr: false })

import clsx from "clsx";

import classes from "./review.module.css";

import StarSVG from "@/public/sprites/icons/star.svg";

interface IProps {
  item: any;
}

const Review = ({ item }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={classes.slide}>
        <h4 className={classes.title}>{item.name}</h4>
        <div className={classes.review}>
          <div className={classes.stars}>
            {/* Генерируем пять звезд */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <StarSVG className={classes.star} key={index} />
            ))}
          </div>
          <p className={classes.date}>{item.date}</p>
        </div>
        <div className={classes.descriptionContainer}>
          <p className={clsx(classes.closed, classes.description)}>
            {item.description}
          </p>
          <div className={classes.hider}></div>
        </div>
        <button className={classes.button} onClick={() => openModal()}>
          Читать целиком
        </button>
      </div>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className={classes.modalWrapper}>
          <h4 className={classes.title}>{item.name}</h4>
          <div className={classes.review}>
            <div className={classes.stars}>
              {/* Генерируем пять звезд */}
              {[1, 2, 3, 4, 5].map((_, index) => (
                <StarSVG className={classes.star} key={index} />
              ))}
            </div>
            <p className={classes.date}>{item.date}</p>
          </div>
          <p className={clsx(classes.description)}>
            {item.description}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Review;
