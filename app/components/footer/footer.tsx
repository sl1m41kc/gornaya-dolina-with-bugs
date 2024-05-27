import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <p className={classes.text}>&copy;&nbsp;2024, Горная долина</p>
      </div>
    </footer>
  );
};

export default Footer;
