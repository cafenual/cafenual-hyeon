import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Category = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };
  return (
    <div id="Category">
      <div className="list-block">
        <ul className="list">
          <li className="list-left">
            <NavLink activeStyle={activeStyle} exact to=""></NavLink>
          </li>
          <li className="list-right">
            <a href="">목록수정</a>
            <a href="">등록</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
