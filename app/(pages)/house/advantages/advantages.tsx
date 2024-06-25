"use client";

import Modal from "@/app/components/modal/modal";
import classes from "./advantages.module.css";
import AdditionalInfoSVG from "@/public/sprites/icons/additionalInfo.svg";
import { useState } from "react";

interface IProps {
  advantages: any;
}

const Advantages = ({ advantages }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={"container"}>
      <div className={classes.advantages}>
        {advantages.map((item: any, index: number) => (
          <div
            className={classes.item}
            key={index + item.title + item.description}
          >
            {item.additionalInfo && (
              <>
                <div
                  onClick={() => setIsModalOpen(true)}
                  className={classes.additionalInfoWrapper}
                >
                  <div className={classes.additionalInfo}>
                    <AdditionalInfoSVG className={classes.additionalInfoIcon} />
                  </div>
                </div>
                <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                  <div className={classes.modalContent}>
                    <h2 className={classes.titleModal}>
                      Дополнительная информация
                    </h2>
                    <div className={classes.content}>{item.additionalInfo}</div>
                  </div>
                </Modal>
              </>
            )}
            <div className={classes.iconWrapper}>{item.icon}</div>
            <div className={classes.textWrapper}>
              <h4 className={classes.title}>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
