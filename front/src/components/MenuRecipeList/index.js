import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";

const MenuRecipeList = ({ match }) => {
  const category = match.params.categoryid;
  console.log(category);
  const [fakeDatalist, setFakeDataList] = useState([]);
  const fakeData = [
    {
      name: "아메라카노",
      category: "coffe",
      img: "이미지",
    },
    {
      name: "오렌지 주스",
      category: "juice",
    },
    {
      name: "키위 주스",
      category: "juice",
    },
    {
      name: "카모마일",
      category: "tea",
    },
    {
      name: "프렌치얼그레이",
      category: "tea",
    },
    {
      name: "초콜릿라떼",
      category: "latte",
    },
    {
      name: "고구마라떼",
      category: "latte",
    },
    {
      name: "카라멜프라페",
      category: "Frappuccino",
    },
    {
      name: "바닐라쉐이크",
      category: "Frappuccino",
    },
    {
      name: "BELT 샌드위치",
      category: "sandwich",
    },
  ];
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
          <ul>
            {fakeDatalist.map((data, index) => (
              <li key={index}>
                <div>
                  <img src={data.img}></img>
                </div>
                <div>{data.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom-block">페이지 숫자</div>
      </div>
    </div>
  );
};

export default withRouter(MenuRecipeList);
