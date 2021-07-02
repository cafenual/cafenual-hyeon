import React from "react";
import Header from "layouts/Header";
import "./styles.css";
import MenuCategory from "components/MenuCategory";
import MenuRecipeList from "components/MenuRecipeList";

const MenuView = () => {
  return (
    <div id="MenuView" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <MenuCategory />
        </div>
        <div className="bottom-block">
          <MenuRecipeList />
        </div>
      </div>
    </div>
  );
};

export default MenuView;
