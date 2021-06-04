import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillClockCircle } from "react-icons/ai";
import { BsFillPersonLinesFill, BsCalendarFill } from "react-icons/bs";
import "./styles.css";

const StaffSide = () => {
  const activeStyle = {
    backgroundColor: "#F2F2F2",
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
            <NavLink to={"/staff"} exact activeStyle={activeStyle}>
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
            <NavLink to={"/staff/information"} exact activeStyle={activeStyle}>
              <BsFillPersonLinesFill />
              <span>계정정보</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/staff/schedule"} exact activeStyle={activeStyle}>
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
        </ul>
      </div>
    </div>
  );
};

export default StaffSide;
