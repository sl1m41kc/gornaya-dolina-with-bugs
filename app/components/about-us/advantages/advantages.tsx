import React from "react";
import classes from "./advantages.module.css";
import { data } from "@/data/data";
import clsx from "clsx";

const Advantages = () => {
  return (
    <div className={clsx(classes.advantages, "container")}>
      {data.advantages.map((advantage, index) => (
        <div
          className={classes.item}
          key={index + advantage.title + advantage.description}
        >
          <div className={classes.iconWrapper}>{advantage.icon}</div>
          <div className={classes.textWrapper}>
            <h3 className={classes.title}>{advantage.title}</h3>
            <p className={classes.description}>{advantage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
