import HandOverMenu from "components/HandOverMenu";
import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HandOverData } from "static/FakeDates";
import "./styles.css";

const HandOverList = ({ match }) => {
  const type = match.params.typeid;
  console.log(type);

  const [FakeHandOverData, setFakeHandOverData] = useState([]);
  const FakeHandOverdata = HandOverData;
  useEffect(() => {
    if (!type) {
      setFakeHandOverData(
        FakeHandOverdata.filter((data) => data.type === "day")
      );
    } else {
      setFakeHandOverData(
        FakeHandOverdata.filter((data) => data.type === type)
      );
    }
  }, [type]); //type이 들어가는것은 어떤 의미를 갖는 것일까?
  console.log(FakeHandOverData);

  return (
    <div id="HandOver" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <HandOverMenu />
        </div>
        <div className="middle-block">
          <table className="table">
            <colgroup>
              <col className="left" /> {/*row 행, low 열*/}
              <col className="right" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">내용</th>
                <th scope="col">등록일</th>
              </tr>
            </thead>
            <tbody>
              {FakeHandOverData.map((data, index) => (
                <tr key={index}>
                  <td className="td-left">
                    <div className="inner-cont">
                      <span className="inner-text">
                        <a
                          href={`/handover/detail/${data.id}`}
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
        <div className="bottom-block">
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
  );
};

export default withRouter(HandOverList);
