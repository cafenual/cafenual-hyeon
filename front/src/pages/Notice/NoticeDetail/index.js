import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "layouts/Header";
import { withRouter } from "react-router-dom";
import { NoticeData } from "static/FakeDates";

const NoticeDetail = ({ match }) => {
  const noticeid = match.params.noticeid;
  console.log(noticeid);
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Content, setContent] = useState("");
  const fakeData = NoticeData;
  useEffect(() => {
    const noticeData = fakeData.filter((data) => data.id === noticeid);
    setTitle(noticeData[0].title);
    setDate(noticeData[0].date);
    setContent(noticeData[0].content);
  });

  return (
    <>
      Title && Date && Content
      <div id="NoticeDetail" className="page-layout">
        <Header />
        <div className="back-ground">
          <div className="detail-form">
            <div className="detail-top">
              <div className="detail-title">{Title}</div>
              <div className="title-bottom">
                <div className="detail-date">{Date}</div>
                <a href="/notice">목록</a>
              </div>
            </div>
            <div className="datail-middle">
              <div
                className="detail-cont"
                dangerouslySetInnerHTML={{ __html: Content }}
              ></div>
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
    </>
  );
};

export default withRouter(NoticeDetail);
