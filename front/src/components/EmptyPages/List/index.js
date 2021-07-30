import Header from "layouts/Header";
import React, { useState } from "react";
import Category from "../Category";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

const List = () => {
  return (
    <div id="List" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <Category />
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
              <tr>
                <td className="td-left">
                  <div className="inner-cont">
                    <span className="inner-text">
                      <a href="" className="link-text">
                        제목
                      </a>
                    </span>
                  </div>
                </td>
                <td>
                  <div className="inner-date">날짜</div>
                </td>
              </tr>
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

export default List;
