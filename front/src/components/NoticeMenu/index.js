import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { NoticeMenuData } from "static/FakeDates";

import "./styles.css";

const FakeNoticeMenuData = NoticeMenuData;

const NoticeMenu = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="NoticeMenu">
      <div className="list-block">
        <ul className="list">
          {FakeNoticeMenuData.map((data, index) => (
            <li className="list-left" key={index}>
              <NavLink
                activeStyle={activeStyle}
                exact
                to={data.name === "notice" ? "/notice" : `/notice/${data.name}`}
              >
                {data.text}
              </NavLink>
            </li>
          ))}
          <li className="list-right">
            <a href="/notice/listedit">목록수정</a>
            <a href="/notice/upload">등록</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoticeMenu;
