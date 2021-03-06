import React from "react";
import Header from "layouts/Header";
import StaffSide from "layouts/StaffSide";
import Profile from "components/Profile";
import "./styles.css";

const DashBoard = () => {
  const onClick_gowork = () => {
    alert("출근되었습니다");
  };
  const onClick_offwork = () => {
    alert("퇴근되었습니다");
  };
  return (
    <div id="DashBoard" className="page-layout">
      <Header />
      <StaffSide />
      <div className="all-block">
        <div className="left-block">
          <div className="left-top">
            <div className="new-everything">신메뉴&신이벤트</div>
            <div className="schedule">스케쥴</div>
          </div>
          <div className="left-bottom">
            <div className="important-notice">공지사항</div>
          </div>
        </div>
        <div className="right-block">
          <div className="profile-box">
            <div className="profile-components">
              <center>
                <Profile />
              </center>
            </div>
            <div className="btns-block">
              <button onClick={onClick_gowork}>출근하기</button>
              <button onClick={onClick_offwork}>퇴근하기</button>
            </div>
          </div>
          <div className="day-work">오늘할일</div>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
