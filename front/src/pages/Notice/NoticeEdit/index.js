import React from "react";
import "./styles.css";
import Header from "layouts/Header";

const NoticeEdit = () => {
  return (
    <div id="NoticeEdit" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="upload-form">
          <form action="">
            <div className="upload-title">
              <input
                type="text"
                className="input-title"
                placeholder="Edit Title"
              />
            </div>
            <div className="upload-cont">Edit Content</div>
            <div className="upload-btn">
              <button type="submit" className="cont-upload">
                수정하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeEdit;
