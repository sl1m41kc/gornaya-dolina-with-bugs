"use client";

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
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  if (!isOpen) return null;

  document.body.style.overflow = "hidden";

  return (
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
    </div>
  );
};

export default Modal;
