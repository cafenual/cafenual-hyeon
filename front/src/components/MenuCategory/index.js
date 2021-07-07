import { NavLink } from "react-router-dom";
import { categoryData } from "static/FakeDates";
import "./styles.css";

const categories = categoryData;

const MenuCategory = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="MenuCategory">
      <div className="list-block">
        <ul className="list">
          {categories.map((category, index) => (
            <li className="list-left" key={index}>
              <NavLink
                activeStyle={activeStyle}
                exact
                to={
                  category.name === "all" ? "/menu" : `/menu/${category.name}`
                }
              >
                {category.text}
              </NavLink>
            </li>
          ))}
          <li className="list-right">
            <a href="/menu/categoryedit">목록수정</a>
            <a href="/menu/upload">등록</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuCategory;
