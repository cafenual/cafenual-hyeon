import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import {
  BsFillPersonLinesFill,
  BsCalendarFill,
  BsFileText,
  BsCardList,
} from "react-icons/bs";
import "./styles.css";

const StaffSide = () => {
  const activeStyle = {
    backgroundColor: "#FAFAFA",
    color: "#585858",
  };

  return (
    <div id="StaffSide">
      <div className="navigation nav">
        <div className="nav-title">
          <span>main</span>
        </div>
        <ul>
          <li>
            <NavLink to={"/dashboard"} exact activeStyle={activeStyle}>
              <AiFillHome />
              <span>Home</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="apps nav">
        <div className="nav-title">
          <span>Apps</span>
        </div>
        <ul>
          <li>
            <NavLink to={"/staff/account"} exact activeStyle={activeStyle}>
              <BsFillPersonLinesFill />
              <span>계정정보</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/schedule"} exact activeStyle={activeStyle}>
              <BsCalendarFill />
              <span>스케줄러</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/worktime"} exact activeStyle={activeStyle}>
              <AiFillClockCircle />
              <span>일한시간</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/work"} exact activeStyle={activeStyle}>
              <BsFileText />
              <span>ToDo</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSide;
