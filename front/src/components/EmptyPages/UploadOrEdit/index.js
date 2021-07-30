import Header from "layouts/Header";
import "./styles.css";
import React, { useState } from "react";

const UploadOrEdit = () => {
  const [Title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div id="UploadOrEdit" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top">
          <input
            type="text"
            className="input-title"
            placeholder="제품명을 입력하세요 or 제품이름"
          />
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="img">
              <input
                className="upload-name"
                value={Title}
                placeholder="파일 선택"
              />
              <label for="img-link">Browse</label>
              <input
                type="file"
                id="img-link"
                accept="image/*"
                onChange={onChange}
              />
            </div>
            <div className="menu-kind">
              <select>
                <option>종류 선택 </option>
              </select>
            </div>
          </div>
          <div className="bottom-bottom">content</div>
          <div className="btn-area">
            <button>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadOrEdit;
