import Header from "layouts/Header";
import React from "react";
import "./styles.css";

const PersonalInfo = () => {
  return (
    <div id="PersonalInfo" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <div className="title">개인정보</div>
        </div>
        <div className="middle-block">
          <span className="name-block">
            이름
            <div className="content">이소현</div>
          </span>
          <span className="email-block">
            이메일
            <div className="content">mag3010@naver.com</div>
          </span>
          <span className="password-block">
            비밀번호
            <div className="change">
              <a href="/account/personalinfo/passwordchange">비밀번호 변경</a>
            </div>
            <div className="content">********</div>
          </span>
          <span className="number-block">
            전화번호
            <div className="change">
              <a href="">전화번호 변경</a>
            </div>
            <div className="content">010-9680-3798</div>
          </span>
          <span className="pay">
            시급
            <div className="content">8720</div>
          </span>
          <span className="role">
            직책
            <div className="content">알바</div>
          </span>
        </div>
        <div className="bottom-block">
          <button>수정</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
