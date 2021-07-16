import Header from "layouts/Header";
import "./styles.css";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { NoticeData, NoticeMenuData } from "static/FakeDates";

const NoticeEdit = ({ match }) => {
  const Noticeid = match.params.Noticeid;
  console.log(Noticeid);

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Type, setType] = useState("");
  const FakeData = NoticeData;

  useEffect(() => {
    const FakeNoticeData = FakeData.filter((data) => data.id === Noticeid);
    setTitle(FakeNoticeData[0].title);
    setContent(FakeNoticeData[0].content);
    if (FakeNoticeData[0].type === "notice") setType("공지사항");
    else if (FakeNoticeData[0].type === "Menu") setType("메뉴공지");
    else setType("이벤트공지");
  });

  const [NoticeMenu, setNoticeMenu] = useState([]);
  const [ImgName, setImgName] = useState("");
  const fakeData = NoticeMenuData;

  useEffect(() => {
    setNoticeMenu(fakeData);
  }, []);

  const onChange = (e) => {
    console.log(e.target.value);
    setImgName(e.target.value);
  };

  return (
    <div id="NoticeEdit" className="page-layout">
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
  );
};

export default withRouter(NoticeEdit);
