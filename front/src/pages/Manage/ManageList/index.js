import ManagementMenu from "components/ManagementMenu";
import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import { ManagementData } from "static/FakeDates";
import { AiOutlineSearch } from "react-icons/ai";
import "./styles.css";
import { withRouter } from "react-router-dom";

const ManagementList = ({ match }) => {
  const menu = match.params.menuid;
  console.log(menu);

  const [FakeManageData, setFakeManageData] = useState([]);
  const [FakeManageData2, setFakeManageData2] = useState([]);
  const fakeData = ManagementData;

  useEffect(() => {
    if (!menu) {
      setFakeManageData(fakeData.filter((data) => data.role === "매니저"));
    } else {
      setFakeManageData(
        fakeData.filter((data) => data.time === menu && data.role === "매니저")
      );
    }
  }, [menu]);
  useEffect(() => {
    if (!menu) {
      setFakeManageData2(fakeData.filter((data) => data.role != "매니저"));
    } else {
      setFakeManageData2(
        fakeData.filter((data) => data.time === menu && data.role != "매니저")
      );
    }
  }, [menu]);

  return (
    <div id="ManagementList" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <ManagementMenu />
        </div>
        <div className="middle-block">
          <table className="table">
            <colgroup>
              <col className="one" />
              <col className="two" />
              <col className="three" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">직급</th>
                <th scope="col">이름</th>
                <th scope="col">파트타임</th>
                <th scope="col">가입일자</th>
              </tr>
            </thead>
            <tbody>
              {FakeManageData.map((data, index) => (
                <tr key={index}>
                  <td className="inner-role">
                    {data.role2}
                    {data.role}
                  </td>
                  <td className="inner-name">
                    <span className="inner-text">
                      <a
                        href={`/management/detail/${data.id}`}
                        className="link-text"
                      >
                        {data.name}
                      </a>
                    </span>
                  </td>
                  <td>{data.time}</td>
                  <td>{data.date}</td>
                </tr>
              ))}
              {FakeManageData2.map((data, index) => (
                <tr key={index}>
                  <td className="inner-role">
                    {data.role2}
                    {data.role}
                  </td>
                  <td className="inner-name">
                    <span className="inner-text">
                      <a
                        href={`/management/detail/${data.id}`}
                        className="link-text"
                      >
                        {data.name}
                      </a>
                    </span>
                  </td>
                  <td>{data.time}</td>
                  <td>{data.date}</td>
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

export default withRouter(ManagementList);
