import { useState } from "react";

// import Modal from "@/app/components/modal/modal";
import dynamic from 'next/dynamic'
const Modal = dynamic(() => import('@/app/components/modal/modal'), { ssr: false })

import { useRef } from 'react';
import clsx from "clsx";

import classes from "./review.module.css";

import StarSVG from "@/public/sprites/icons/star.svg";

interface IProps {
  item: any;
}

type Content = any;

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
          <p className={classes.description}>
            {item.description}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Review;
