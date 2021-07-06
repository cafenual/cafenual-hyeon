import React, { useEffect, useState } from "react";
import Header from "layouts/Header";
import "./styles.css";
import { withRouter } from "react-router-dom";
import { RecipeData } from "static/FakeDates";

const MenuDetail = ({ match }) => {
  const recipeName =
    match.params.recipeName; /*변수 이름이랑 params 뒤에랑 이름이 동일해야함 */
  console.log(recipeName);
  const [Title, setTitle] = useState("");
  const [Img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [tjfaudtj, settjfaudtj] = useState("");
  const fakeData = RecipeData;
  useEffect(() => {
    const menuData = fakeData.filter((data) => data.name === recipeName);
    setTitle(menuData[0].name);
    setImg(menuData[0].img);
    console.log(menuData);
  }, []);
  return (
    <>
      {Title &&
        Img && ( //&&의 뜻은 렌더링 한 후에 해라
          <div id="MenuDetail" className="page-layout">
            <Header />
            <div className="all-block">
              <div className="top">{Title}</div>
              <div className="bottom">
                <div className="left-block">
                  <div className="left-top">
                    <img src={Img} />
                  </div>
                  <div className="left-bottom">레시피</div>
                </div>
                <div className="right-block">
                  <div className="right-top">
                    <a href="/menu">목록</a>
                  </div>
                  <div className="right-middle">설명서</div>
                  <div className="right-bottom">
                    <a href="/menu/edit">수정</a>
                    <a href="/menu">삭제</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default withRouter(MenuDetail);
