import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { NoticeMenuData } from "static/FakeDates";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

const NoticeMenuEdit = () => {
  const [FakeNoticeMenuData, setFakeNoticeMenuData] = useState([]);
  const MenuData = NoticeMenuData;
  useEffect(() => {
    setFakeNoticeMenuData(MenuData);
  }, []);

  return (
    <div id="NoticeListEdit" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <table className="table">
            <colgroup>
              <col className="new-menu" />
              <col className="add" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">목록이름</th>
                <th scope="col">추가</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="add-input"
                    placeholder="추가할 목록이름을 적어주세요"
                  />
                </td>
                <td>
                  <button>
                    <AiFillFileAdd />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="middle-block">
          <table className="table">
            <colgroup>
              <col className="menu-edit" />
              <col className="location-change" />
              <col className="delete" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">목록 수정</th>
                <th scope="col">위치변경</th>
                <th scope="col">삭제</th>
              </tr>
            </thead>
            <tbody>
              {FakeNoticeMenuData.map((data, index) => (
                <tr key={index}>
                  <td className="td-left">
                    <div className="inner-cont">
                      <div className="inner-text">
                        <input
                          type="text"
                          placeholder={data.text}
                          className="edit-input"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="up-down">
                    <button>
                      <AiFillCaretUp />
                    </button>
                    <button>
                      <AiFillCaretDown />
                    </button>
                  </td>
                  <td className="delete-btn">
                    <button>
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bottom-block">
          <button>적용하기</button>
        </div>
      </div>
    </div>
  );
};

export default NoticeMenuEdit;
