import React from "react";
import "./styles.css";
import Header from "layouts/Header";

const NoticeDetail = () => {
  return (
    <div id="NoticeDetail" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="detail-form">
          <div className="detail-top">
            <div className="detail-title">title</div>
            <div className="title-bottom">
              <div className="detail-date">0000-00-00</div>
              <a href="/notice">목록</a>
            </div>
          </div>
          <div className="datail-middle">
            <div className="detail-cont">content</div>
          </div>
          <div className="datail-bottom">
            <div className="bottom-left">
              <a href="">이전</a>
              <a href="">다음</a>
            </div>
            <div className="bottom-right">
              <a href="/notice/edit">수정</a>
              <a href="">삭제</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
