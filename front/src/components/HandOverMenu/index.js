import React from "react";
import { NavLink } from "react-router-dom";
import { HandOverListData } from "static/FakeDates";

import "./styles.css";

const handOverData = HandOverListData;

const HandOverMenu = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="HandOverMenu">
      <div className="list-block">
        <ul className="list">
          {handOverData.map((data, index) => (
            <li className="list-left" key={index}>
              <NavLink
                activeStyle={activeStyle}
                exact
                to={
                  data.name === "day" ? "/handover" : `/handover/${data.name}`
                }
              >
                {data.text}
              </NavLink>
            </li>
          ))}
          <li className="list-right">
            <a href="/handover/listedit">목록수정</a>
            <a href="/handover/upload">등록</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HandOverMenu;
