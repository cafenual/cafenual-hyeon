import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "layouts/Header";
import { menuData } from "static/FakeDates";

const MenuEdit = () => {
  const [fakeDatalist, setFakeDataList] = useState([]);
  const fakeData = menuData;
  useEffect(() => {
    setFakeDataList(fakeData);
  }, []);

  return (
    <div id="MenuEdit" className="page-layout">
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
              <input className="upload-name" value="" placeholder="파일 선택" />
              <label for="img-link">Browse</label>
              <input type="file" id="img-link" accept="image/*" />
            </div>
            <div className="menu-kind">
              <select>
                <option>종류 선택 </option>
                {fakeDatalist.map(
                  (
                    data, //data는 변수 순회하는 아이
                    index
                  ) => (
                    <option>{data.category}</option>
                  )
                )}
              </select>
            </div>
          </div>
          <div className="bottom-middle">레시피</div>
          <div className="bottom-bottom">설명서</div>
          <div className="btn-area">
            <button>등록하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuEdit;
