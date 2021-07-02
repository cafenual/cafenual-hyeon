import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "coffe",
    text: "커피",
  },
  {
    name: "juice",
    text: "쥬스",
  },
  {
    name: "tea",
    text: "티",
  },
  {
    name: "latte",
    text: "라떼",
  },
  {
    name: "Frappuccino",
    text: "프라페",
  },
  {
    name: "sandwich",
    text: "샌드위치",
  },
];

const MenuCategory = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="MenuCategory">
      <ul className="list">
        {categories.map((category, index) => (
          <li className="list-left" key={index}>
            <NavLink
              activeStyle={activeStyle}
              exact
              to={category.name === "all" ? "/menu" : `/menu/${category.name}`}
            >
              {category.text}
            </NavLink>
          </li>
        ))}
        <li className="list-right">
          <a href="/menu/upload">등록</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuCategory;
