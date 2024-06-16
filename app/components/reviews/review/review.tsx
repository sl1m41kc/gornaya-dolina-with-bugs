import { useState } from "react";
import Modal from "@/app/components/modal/modal";
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
  const modal = useRef(document.getElementById("modal"));

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
      </Modal>
    </>
  );
};

export default Review;
