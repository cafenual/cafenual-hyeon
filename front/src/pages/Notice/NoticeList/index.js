import React from "react";
import Header from "layouts/Header";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

const NoticeList = () => {
  return (
    <div id="NoticeList">
      <Header />
      <div className="back-ground">
          <div className="all-block">
            <div className="noticelist-top">
              <div className="list-search">
                <form action="">
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
                </form>
              </div>
              <div className="list-write">
                <a href="/notice/upload">작성</a>
              </div>
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
                  <tr>
                    <td className="td-left">
                      <div className="inner-cont">
                        <span className="inner-text">
                          <a href="" className="link-text" />
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="inner-date">0000-00-00</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="noticelist-bottom">{/*페이지 넘기기*/}</div>
          </div>
      </div>
    </div>
  );
};

export default NoticeList;
