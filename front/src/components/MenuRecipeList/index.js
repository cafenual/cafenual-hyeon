import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RecipeData } from "static/FakeDates";

const MenuRecipeList = ({ match }) => {
  const category = match.params.categoryid;
  console.log(category);

  const [fakeDatalist, setFakeDataList] = useState([]);
  const fakeData = RecipeData;

  useEffect(() => {
    if (!category) {
      setFakeDataList(fakeData);
    } else {
      setFakeDataList(fakeData.filter((data) => data.category === category));
    }
    {
      /*data(변수)는 구조체 같은느낌 반복문으로 계속 끝날때까지 돌면서 확인한다
    만약 카테고리가 맞다면 useState안에 넣는다 */
    }
  }, [category]);

  return (
    <div id="MenuRecipeList">
      <div className="all-block">
        <div className="top-block">
          <ul className="list">
            {fakeDatalist.map((data, index) => (
              <li key={index}>
                <div className="image-box">
                  <img src={data.img} />
                </div>
                <div className="name-box">
                  <a href={`/menu/detail/${data.name}`}>{data.name}</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-block">
          <div>페이지 숫자</div>
          <div className="search-block">
            <button type="submit" className="search-btn">
              <AiOutlineSearch size="23" />
            </button>
            <input type="text" className="search-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuRecipeList);
