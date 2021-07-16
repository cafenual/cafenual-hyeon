import Header from "layouts/Header";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { NoticeMenuData } from "static/FakeDates";

const NoticeUpload = () => {
  const [NoticeMenu, setNoticeMenu] = useState([]);
  const [MenuTitle, setMenuTitle] = useState("");
  const fakeData = NoticeMenuData;

  useEffect(() => {
    setNoticeMenu(fakeData);
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setMenuTitle(e.target.value);
  };

  return (
    <div id="NoticeUpload" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top">
          <input
            type="text"
            className="input-title"
            placeholder="제품명을 입력하세요"
          />
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="img">
              <input
                className="upload-name"
                value={MenuTitle}
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
                {NoticeMenu.map(
                  (
                    data, //data는 변수 순회하는 아이
                    index
                  ) => (
                    <option>{data.text}</option>
                  )
                )}
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

export default NoticeUpload;
