"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";
import classes from "./modal.module.css";

interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ isOpen, setIsOpen, children }: IProps) => {
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.marginRight = "0px";
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      // Получение ширины скролла
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      console.log(scrollbarWidth)
      // Применение ширины скролла к body
      document.body.style.marginRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;


  return createPortal(
    <div className={classes.overlay}>
      <div className={classes.backdrop} onClick={closeModal} />
      <div className={classes.modal}>
        <button onClick={closeModal} type="button" className={classes.close}>
          <span className={classes.closeIcon}>
            <span className={classes.closeBefore}></span>
            <span className={classes.closeAfter}></span>
          </span>
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
