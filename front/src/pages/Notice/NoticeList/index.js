import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NoticeData } from "static/FakeDates";
import { withRouter } from "react-router-dom";
import NoticeMenu from "components/NoticeMenu";

const NoticeList = ({ match }) => {
  const type = match.params.typeid;

  const [FakeNoticeData, setFakeNoticeData] = useState([]);
  const FakeNotice = NoticeData;

  useEffect(() => {
    if (!type) {
      setFakeNoticeData(FakeNotice.filter((data) => data.type === "notice"));
    } else {
      setFakeNoticeData(FakeNotice.filter((data) => data.type === type));
    }
  }, [type]);

  return (
    <div id="NoticeList" className="page-layout">
      <Header />
      <div className="back-ground">
        <div className="all-block">
          <div className="noticelist-top">
            <NoticeMenu />
          </div>
          <div className="noticelist-middle">
            <table className="table">
              <colgroup>
                {/*colgroup 테이블에서 서식 지정을 위해 하나 이상의 열을 그룹으로 묶을 때 사용*/}
                <col className="left" />
                <col className="right" />
              </colgroup>
              {/*thread는 테이블에서 헤더 컨텐츠들을 하나의 그룹으로 묶을 때 사용*/}
              <thead>
                <tr>
                  <th scope="col">내용</th>
                  <th scope="col">등록일</th>
                </tr>
              </thead>
              {/*tbody 표 본문 요소*/}
              <tbody>
                {FakeNoticeData.map((data, index) => (
                  <tr key={index}>
                    <td className="td-left">
                      <div className="inner-cont">
                        <span className="inner-text">
                          <a
                            href={`/notice/detail/${data.id}`}
                            className="link-text"
                          >
                            {data.title}
                          </a>
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="inner-date">{data.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="noticelist-bottom">
            <div className="number-page">페이지 숫자</div>
            <div className="list-search">
              <fieldset>
                {/*fieldset은 그룹화 시킬때 사용*/}
                <input
                  type="text"
                  className="search-input"
                  placeholder="검색어를 입력해주세요"
                />
                <button type="submit" className="search-btn">
                  <AiOutlineSearch size="23" />
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoticeList);
