// libs
import React from "react";
// others
import style from "./HotelAddress.module.scss";

/**
 * HotelAddress
 */
const HotelAddress = () => (
  <div className={style.wrapper}>
    <div className={style.inner}>
      <iframe
        title="happy hotel address"
        className={style.googleMap}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=3%20Chome-37-25%20Mukojima%2C%20Sumida%20City%2C%20Tokyo%20131-0033%2C%20Japan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
      />
    </div>
  </div>
);

export default HotelAddress;
