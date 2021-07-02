import React from "react";
import "./styles.css";
import Header from "layouts/Header";

const MenuEdit = () => {
  return (
    <div id="MenuEdit" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top">
          <input
            type="text"
            className="input-title"
            placeholder="제품명을 입력하세요"
          />
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="img-link">이미지 링크</div>
            <div clasName="menu-kind">메뉴 종류(드롭다운리스트)</div>
          </div>
          <div className="bottom-middle">레시피</div>
          <div className="bottom-bottom">설명서</div>
          <div className="btn-area">
              <button>수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuEdit;
