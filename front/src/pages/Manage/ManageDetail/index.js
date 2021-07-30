import Header from "layouts/Header";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  ManagementData,
  ManagementMenuData,
  ManagementRoleData,
} from "static/FakeDates";
import "./styles.css";

const ManagementDetail = ({ match }) => {
  const id = match.params.id;

  const [FakeManageData, setFakeManageData] = useState([]);
  const fakeData = ManagementData;

  const [FakeManageMenuData, setFakeManageMenuData] = useState([]);
  const fakeMenuData = ManagementMenuData;

  const [FakeManageRoleData, setFakeManageRoleData] = useState([]);
  const fakeRoleData = ManagementRoleData;

  useEffect(() => {
    setFakeManageData(fakeData.filter((data) => data.id === id));
  }, [id]);
  useEffect(() => {
    setFakeManageMenuData(fakeMenuData);
    setFakeManageRoleData(fakeRoleData);
  }, []);

  return (
    <div id="ManagementDetail" className="page-layout">
      <Header />
      <div className="blocks">
        {FakeManageData.map((data, index) => (
          <div className="all-block">
            <div className="top-block">
              <div className="top-left">
                <div className="img-box">
                  <img src={data.img} />
                </div>
              </div>
              <div className="top-right">
                <div className="text-line">이름 : {data.name}</div>
                <div className="text-line">
                  직급 :{" "}
                  <select>
                    <option>현재 : {data.role} </option>
                    {FakeManageRoleData.map((data, index) => (
                      <option>{data.text}</option>
                    ))}
                  </select>
                </div>
                <div className="text-line">
                  파트 :{" "}
                  <select>
                    <option>현재 : {data.time}</option>
                    {FakeManageMenuData.map((data, index) => (
                      <option>{data.text}</option>
                    ))}
                  </select>
                </div>
                <div className="text-line">
                  시급 :{" "}
                  <input type="number" className="" placeholder={data.pay} />
                </div>
                <div className="text-line">등록일자 : {data.date}</div>
                <div className="text-line">전화번호 : {data.tel}</div>
                <div className="text-line">이메일 : {data.email}</div>
              </div>
            </div>
            <div className="bottom-block">
              <div className="bottom-left">
                <a href="">이전</a>
                <a href="">다음</a>
              </div>
              <div className="bottom-right">
                <a href={`/management`}>등록</a>
                <a href={`/management`}>삭제</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(ManagementDetail);
