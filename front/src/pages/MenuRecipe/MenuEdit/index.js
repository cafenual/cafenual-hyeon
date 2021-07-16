import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "layouts/Header";
import { menuData, RecipeData } from "static/FakeDates";

const MenuEdit = ({ match }) => {
  const menuname = match.params.menuname;
  console.log(menuname);
  const [Title, setTitle] = useState("");
  const [Category, setCategory] = useState("");
  const [Recipe, setRecipe] = useState("");
  const [Content, setContent] = useState("");
  const [Img, setImg] = useState("");
  const FakeData = RecipeData;

  useEffect(() => {
    const FakeRecipeData = FakeData.filter((data) => data.name === menuname);
    setTitle(FakeRecipeData[0].name);
    setCategory(FakeRecipeData[0].category);
    setRecipe(FakeRecipeData[0].recipe);
    setContent(FakeRecipeData[0].content);
    setImg(FakeRecipeData[0].img);
  });
  const [fakeDatalist, setFakeDataList] = useState([]);
  const [ImgName, setImgName] = useState("");
  const fakeData = menuData;

  useEffect(() => {
    setFakeDataList(fakeData);
  }, []);

  const onChange = (e) => {
    setImgName(e.target.value);
  };

  return (
    <>
      <div id="MenuEdit" className="page-layout">
        <Header />
        <div className="all-block">
          <div className="top">
            <input type="text" className="input-title" placeholder={Title} />
          </div>
          <div className="bottom">
            <div className="bottom-top">
              <div className="img">
                <input className="upload-name" value="" placeholder={Img} />
                <label for="img-link">Browse</label>
                <input type="file" id="img-link" accept="image/*" />
              </div>
              <div className="menu-kind">
                <select>
                  <option>현재 : {Category}</option>
                  {fakeDatalist.map(
                    (
                      data, //data는 변수 순회하는 아이
                      index
                    ) => (
                      <option>{data.text}</option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="explain-text">설명서</div>
            <div
              className="bottom-middle"
              dangerouslySetInnerHTML={{ __html: Recipe }}
            ></div>
            <div className="explain-text">레시피</div>
            <div
              className="bottom-bottom"
              dangerouslySetInnerHTML={{ __html: Content }}
            ></div>
            <div className="btn-area">
              <button>등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuEdit;
