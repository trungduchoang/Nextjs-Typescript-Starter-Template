// libs
import React from "react";
// components
import Room from "../../components/Room";
import ParkingLot from "../../components/ParkingLot";
import Building from "../../components/Building";
import PaymentMethod from "../../components/PaymentMethod";
import TimeOut from "../../components/TimeOut";
import NumberOfUser from "../../components/NumberOfUser";
import RoomService from "../../components/RoomService";
import OtherService from "../../components/OtherService";
import HotelGroup from "../../components/HotelGroup";
import Official from "../../components/Official";
// others
import style from "./GuestInformation.module.scss";

const GuestInformation = () => (
  <div className={style.wrapper}>
    <Room />
    <ParkingLot />
    <Building />
    <PaymentMethod />
    <NumberOfUser />
    <TimeOut />
    <RoomService />
    <OtherService />
    <HotelGroup />
    <Official />
  </div>
);

export default GuestInformation;
