import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";

const MenuUpload = () => {
  const [fakeDatalist, setFakeDataList] = useState([]);

  const fakeData = [
    {
      category: "coffe",
    },
    {
      category: "juice",
    },
    {
      category: "tea",
    },
    {
      category: "latte",
    },
    {
      category: "Frappuccino",
    },
    {
      category: "sandwich",
    },
  ];
  useEffect(() => {
    setFakeDataList(fakeData);
  }, []);
  return (
    <div id="MenuUpload" className="page-layout">
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
                type="file"
                className="img-link"
                accept="image/png, image/jpg"
              />
            </div>
            <div clasName="menu-kind">
              메뉴 종류(드롭다운리스트)
              <select>
                <option> </option>
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

export default MenuUpload;
