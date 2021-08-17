import React from "react";
import "./styles.css";
import { BsChevronRight, BsPerson } from "react-icons/bs";

const Profile = () => {
  return (
    <div id="Profile">
      <div className="profile-top">
        <span>계정정보</span>
        <a href={`/staff/account`}>
          <span>더보기</span>
        </a>
      </div>
      <div className="profile-img">
        <BsPerson size="100" />
      </div>
      <div className="profile-bottom">
        <div className="profile-name">
          <span className="info-option">이름 : </span>
          <span className="info-des">이소현</span>
        </div>
        <div className="profile-age">
          <span className="info-option">나이 : </span>
          <span className="info-des">23</span>
        </div>
        <div className="profile-id">
          <span className="info-option">아이디 : </span>
          <span className="info-des">mag3010</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
