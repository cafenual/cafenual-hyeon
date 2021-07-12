import React, { useState } from "react";
import { NavLink } from "react-router-dom"; //메뉴를 클릭할때 링크를 타고 갈 수 있도록
import "./styles.css";
import { BiFoodMenu, BiBell, BiCalendarEdit } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import cafe from "./cafe.png";

const Header = () => {
  const activeStyle = {
    backgroundColor: "#FAFAFA",
    color: "#585858",
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/dashboard">
            <img src={cafe} />
            <span className="h1">cafenual</span>
          </a>
        </div>

        <div className="header-nav">
          <div className="left-nav">
            <ul>
              {/* 목록 태그 */}
              <li>
                <NavLink to={"/dashboard"} activStyle={activeStyle}>
                  <BsGrid />
                  <span>대시보드</span> {/*div와 비슷하지만 인라인 타입*/}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/menu"} activStyle={activeStyle}>
                  <BiFoodMenu />
                  <span>메뉴레시프</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/notice"} activStyle={activeStyle}>
                  <BiBell />
                  <span>공지사항</span>{" "}
                  {/*exact가 붙으면 notice만 활성화되게, 안붙으면 23이 붙어도 활성화가 됨*/}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/handover"} activeStyle={activeStyle}>
                  <BiCalendarEdit />
                  <span>인수인계</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li>
                <a href="/">로그아웃</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
