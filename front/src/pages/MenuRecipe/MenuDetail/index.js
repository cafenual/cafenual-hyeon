import React from "react";
import Header from "layouts/Header";
import "./styles.css";

const MenuDetail = () => {
  return (
    <div id="MenuDetail" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top">
          상품명
        </div>
        <div className="bottom">
          <div className="left-block">
            <div className="left-top">이미지</div>
            <div className="left-bottom">레시피</div>
          </div>
          <div className="right-block">
            <div className="right-top">
              <a href="/menu">목록</a>
            </div>
            <div className="right-middle">설명서</div>
            <div className="right-bottom">
              <a href="/menu/edit">수정</a>
              <a href="/menu">삭제</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
