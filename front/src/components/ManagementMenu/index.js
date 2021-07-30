import { NavLink } from "react-router-dom";
import { ManagementMenuData } from "static/FakeDates";
import "./styles.css";

const categories = ManagementMenuData;

const ManagementMenu = () => {
  const activeStyle = {
    color: "#424242",
    fontSize: "18px",
  };

  return (
    <div id="ManagementMenu">
      <div className="list-block">
        <ul className="list">
          <li className="list-left">
            <NavLink activeStyle={activeStyle} exact to={`/management`}>
              전체보기
            </NavLink>
          </li>
          {categories.map((category, index) => (
            <li className="list-left" key={index}>
              <NavLink
                activeStyle={activeStyle}
                exact
                to={`/management/${category.text}`}
              >
                {category.text}
              </NavLink>
            </li>
          ))}
          <li className="list-right">
            <a href="/empty/ca-ed">목록수정</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ManagementMenu;
