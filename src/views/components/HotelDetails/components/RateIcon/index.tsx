// libs
import React, { useState } from "react";
// components
import Star from "../Star";
// others
import style from "./RateIcon.module.scss";

const RateIcon = ({ totalStars = 5 }) => {
  const [starsSelected, selectStar] = useState(0);
  return (
    <div className={style.wrapper}>
      <div className={style.starRating}>
        {[...Array(totalStars)].map((n, index) => (
          <Star
            selected={index < starsSelected}
            onClick={() => selectStar(index + 1)}
          />
        ))}
        <p className={style.score}>{starsSelected}</p>
      </div>
    </div>
  );
};

export default RateIcon;
