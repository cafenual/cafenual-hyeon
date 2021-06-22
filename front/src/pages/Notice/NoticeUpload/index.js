import React from "react";
import "./styles.css";
import Header from "layouts/Header";

const NoticeUpload = () => {
  return (
    <div id="NoticeUpload" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="upload-form">
          <form action="">
            <div className="upload-title">
              <input
                type="text"
                className="input-title"
                placeholder="제목을 입력하세요"
              />
            </div>
            <div className="upload-cont"></div>
            <div className="upload-btn">
              <button type="submit" className="cont-upload">
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeUpload;
