import Header from "layouts/Header";
import React from "react";
import "./styles.css";

const Identify = () => {
  return (
    <div id="Identify" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <div className="title">개인정보 확인</div>
        </div>
        <div className="middle-block">
          <input type="password" placeholder="비밀번호" />
          <div className="find-password">비밀번호 찾기</div>
        </div>
        <div className="bottom-block">
          <button className="btn">확인</button>
        </div>
      </div>
    </div>
  );
};

export default Identify;
