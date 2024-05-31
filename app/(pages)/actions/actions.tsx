"use client";

import { useState } from "react";
import { clsx } from "yet-another-react-lightbox";
import classes from "./actions.module.css";
import Modal from "@/app/components/modal/modal";

type Action = "booking" | "living";

const Actions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "title",
    content: <>content</>,
  });

  const openModal = (action: Action) => {
    if (action === "booking") {
      setModalContent({
        title: "Условия бронирования",
        content: (
          <>
            Бронирование осуществляется по предоплате в размере одних суток
            проживания. Отмена бронирования с возвратом 100% предоплаты возможна
            за 10 дней, менее чем за 10 дней -50%, менее чем за 5 дней
            предоплата не возвращается.
          </>
        ),
      });
    } else if (action === "living") {
      setModalContent({
        title: "Правила проживания",
        content: (
          <>
            <ol className={classes.numberList}>
              <li>Заезд после 14:00, выезд до 11:00</li>
              <li>Соблюдение полной тишины после 22:00</li>
              <li>
                Использование портативных колонок запрещено на протяжении всего
                дня
              </li>
              <li>
                Курение разрешено только в мангальной и костровой зоне, включая
                электронные устройства
              </li>
            </ol>
          </>
        ),
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className={classes.actions}>
      <div className={classes.buttons}>
        <button
          type="button"
          className={clsx("button", classes.button)}
          onClick={() => openModal("booking")}
        >
          Условия бронирования
        </button>
        <button
          type="button"
          className={clsx("button", classes.button)}
          onClick={() => openModal("living")}
        >
          Правила проживания
        </button>
      </div>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <div className={classes.modalContent}>
          <h2 className={classes.title}>{modalContent.title}</h2>
          <div className={classes.content}>{modalContent.content}</div>
        </div>
      </Modal>
    </div>
  );
};

export default Actions;
