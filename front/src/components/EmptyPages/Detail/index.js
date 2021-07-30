import Header from "layouts/Header";
import React from "react";
import "./styles.css";

const Detail = () => {
  return (
    <div id="Detail" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="detail-form">
          <div className="detail-top">
            <div className="detail-title">제목</div>
            <div className="title-bottom">
              <div className="detail-date">날짜</div>
              <a href="/notice">목록</a>
            </div>
          </div>
          <div className="datail-middle">
            <div className="detail-cont">내용</div>
          </div>
          <div className="datail-bottom">
            <div className="bottom-left">
              <a href="">이전</a>
              <a href="">다음</a>
            </div>
            <div className="bottom-right">
              <a href="">수정</a>
              <a href="">삭제</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
