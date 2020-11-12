// libs
import React from "react";
import { StarIcon } from "@/libs/icons";
// others
import style from "./RatePoints.module.scss";

type PROPS = {
  /** avg rate points */
  points: string;
};
/**
 * RatePoints
 */
const RatePoints = ({ points }: PROPS) => (
  <div className={style.wrapper}>
    <div className={style.starRating}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={style.star}
          color={i <= Number(points) ? "#FBB603" : "#999999"}
        />
      ))}
      <span className={style.score}>{points}</span>
    </div>
  </div>
);

export default RatePoints;
