import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { withRouter } from "react-router-dom";
import { RecipeData } from "static/FakeDates";

const MenuDetail = ({ match }) => {
  const recipeName = match.params.recipeName;
  /*변수 이름이랑 params 뒤에랑 이름이 동일해야함 */
  console.log(recipeName);
  const [Title, setTitle] = useState("");
  const [Img, setImg] = useState("");
  const [Recipe, setRecipe] = useState("");
  const [Content, setContent] = useState("");
  const fakeData = RecipeData;
  useEffect(() => {
    const menuData = fakeData.filter((data) => data.name === recipeName);
    setTitle(menuData[0].name);
    setImg(menuData[0].img);
    setRecipe(menuData[0].recipe);
    setContent(menuData[0].content);
    console.log(menuData);
  }, []);
  return (
    <>
      Title && Img && Recipe && Content &&( //&&의 뜻은 렌더링 한 후에 해라
      <div id="MenuDetail" className="page-layout">
        <Header />
        <div className="all-block">
          <div className="top">
            <div className="menu-title">{Title}</div>
            <div className="HotnIce">
              <button>hot</button>{" "}
              {/*
                hot누르면 hot 보이게 ice 보이면 ice보이게 또한 메뉴레시피에는 핫과 아이스가 있다면 핫만 둘중 하나만 있다면 그것이 올라가게 해야할것이다
              */}
              <button>ice</button>
            </div>
          </div>
          <div className="bottom">
            <div className="left-block">
              <div className="left-top">
                <img src={Img} />
              </div>
              <div
                className="left-bottom"
                dangerouslySetInnerHTML={{ __html: Recipe }}
              ></div>
            </div>
            <div className="right-block">
              <div className="right-top">
                <a href="/menu">목록</a>
              </div>
              <div
                className="right-middle"
                dangerouslySetInnerHTML={{ __html: Content }}
              ></div>
              <div className="right-bottom">
                <a href={`/menu/edit/${Title}`}>수정</a>
                <a href="/menu">삭제</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(MenuDetail);
