import React, { useEffect, useState } from "react";
import classes from "./review.module.css";

import StarSVG from "@/public/sprites/icons/star.svg";

interface IProps {
  item: any;
}

const Review = ({ item }: IProps) => {
  return (
    <div className={classes.slide}>
      <h4 className={classes.title}>{item.name}</h4>
      <div className={classes.review}>
        <div className={classes.stars}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <StarSVG className={classes.star} key={index} />
          ))}
        </div>
        <p className={classes.date}>{item.date}</p>
      </div>
      <p className={classes.description}>{item.description}</p>
    </div>
  );
};

export default Review;
