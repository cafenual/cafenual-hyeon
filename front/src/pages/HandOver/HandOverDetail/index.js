import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { HandOverData } from "static/FakeDates";
import "./styles.css";

const HandOverDetail = ({ match }) => {
  const HandOverid = match.params.HandOverid;
  console.log(HandOverid);

  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Content, setContent] = useState("");
  const [Id, setId] = useState("");
  const fakeData = HandOverData;

  useEffect(() => {
    const handOverData = fakeData.filter((data) => data.id === HandOverid);
    setTitle(handOverData[0].title);
    setDate(handOverData[0].date);
    setContent(handOverData[0].content);
    setId(handOverData[0].id);
  });

  return (
    <>
      Title && Date && Content && Id
      <div id="HandOverDetail" className="page-layout">
        <Header />
        <div className="back-ground">
          <div className="detail-form">
            <div className="detail-top">
              <div className="detail-title">{Title}</div>
              <div className="title-bottom">
                <div className="detail-date">{Date}</div>
                <a href="/handover">목록</a>
              </div>
            </div>
            <div className="datail-middle">
              <div
                className="detail-cont"
                dangerouslySetInnerHTML={{ __html: Content }}
              ></div>
            </div>
            <div className="datail-bottom">
              <a href="/handover">삭제</a>
              <a href={`/handover/edit/${Id}`}>수정</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(HandOverDetail);
