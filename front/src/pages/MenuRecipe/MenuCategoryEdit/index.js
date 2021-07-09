import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { menuData } from "static/FakeDates";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCalendarEdit } from "react-icons/bi";
import { BiCalendarPlus } from "react-icons/bi";
import { BiCalendarMinus } from "react-icons/bi";

const MenuCategoryEdit = () => {
  const [FakeCategoryData, setFakeCategoryData] = useState([]);
  const CategoryData = menuData;
  useEffect(() => {
    setFakeCategoryData(CategoryData);
  }, []);

  return (
    <div id="MenuCategoryEdit" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <fieldset>
            <input
              type="text"
              className="search-input" /* 안깨지고 가운데로 정렬하자 */
              placeholder="검색어를 입력해주세요"
            />
            <button className="search-btn">
              <AiOutlineSearch size="23" />
            </button>
          </fieldset>
        </div>
        <div className="bottom-block">
          <table className="table">
            <colgroup>
              <col className="left" />
              <col className="right" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">카테고리 이름</th>
                <th scope="col">수정 / 삭제</th>
              </tr>
            </thead>
            <tr>
              <td className="td-left">
                <div className="inner-cont">
                  <span className="inner-text">
                    <input
                      type="text"
                      className="plus-input"
                      placeholder="category add"
                    />
                  </span>
                </div>
              </td>
              <td className="btn-zone">
                <button>
                  <BiCalendarPlus />
                </button>
              </td>
            </tr>
            <tbody>
              {FakeCategoryData.map((data, index) => (
                <tr key={index}>
                  <td className="td-left">
                    <div className="inner-cont">
                      <span className="inner-text">{data.category}</span>
                    </div>
                  </td>
                  <td className="btn-zone">
                    <button>
                      <BiCalendarEdit />
                    </button>
                    <button>
                      <BiCalendarMinus />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryEdit;
