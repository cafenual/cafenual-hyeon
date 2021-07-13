import Header from "layouts/Header";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { HandOverData, HandOverListData } from "static/FakeDates";

const HandOverEdit = ({ match }) => {
  const HandOverid = match.params.HandOverid;
  console.log(HandOverid);

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Type, setType] = useState("");
  const FakeData = HandOverData;

  useEffect(() => {
    const handOverData = FakeData.filter((data) => data.id === HandOverid);
    setTitle(handOverData[0].title);
    setContent(handOverData[0].content);
    setType(handOverData[0].type);
  });

  const [HandOverMenu, setHandOverMenu] = useState([]);
  const [ImgName, setImgName] = useState("");
  const fakeData = HandOverListData;

  useEffect(() => {
    setHandOverMenu(fakeData);
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setImgName(e.target.value);
  };

  return (
    <>
      Title && Content && Type
      <div id="HandOverEdit" className="page-layout">
        <Header />
        <div className="all-block">
          <div className="top">
            <input type="text" className="input-title" placeholder={Title} />
          </div>
          <div className="bottom">
            <div className="bottom-top">
              <div className="img">
                <input
                  className="upload-name"
                  value={ImgName}
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
                  <option>현재 : {Type}</option>
                  {HandOverMenu.map(
                    (
                      data, //data는 변수 순회하는 아이
                      index
                    ) => (
                      <option>{data.name}</option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div
              className="bottom-bottom"
              dangerouslySetInnerHTML={{ __html: Content }}
            ></div>
            <div className="btn-area">
              <button>등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HandOverEdit;
