import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { WorkMenuData } from "static/FakeDates";

import "./styles.css";

const FakeNoticeMenuData = WorkMenuData;

const WorkMenu = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="WorkMenu">
      <div className="list-block">
        <ul className="list">
          {FakeNoticeMenuData.map((data, index) => (
            <li className="list-left" key={index}>
              <NavLink
                activeStyle={activeStyle}
                exact
                to={
                  data.text === "매일"
                    ? "/staff/work"
                    : `/staff/work/${data.text}`
                }
              >
                {data.text}
              </NavLink>
            </li>
          ))}
          <li className="list-right">
            <a href="/notice/listedit">목록수정</a>
            <a href="/work/uploadedit">등록 및 수정</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkMenu;
