import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"; //메뉴를 클릭할때 링크를 타고 갈 수 있도록
import "./styles.css";
import { BiFoodMenu, BiBell, BiCalendarEdit } from "react-icons/bi";
import { BsGrid, BsCardList } from "react-icons/bs";
import cafe from "static/img/cafe.png";
import axios from "axios";
import { EmptyUser } from "modules/users";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/user/logout");
      sessionStorage.removeItem("user"); //로그아웃을 할때 세션에 있는걸 지워줌
      dispatch(EmptyUser());
    } catch (e) {
      alert("로그아웃에 실패했습니다");
    }
  };

  const activeStyle = {
    backgroundColor: "#FAFAFA",
    color: "#585858",
  };

  return (
    <div id="Header">
      <div className="header-menu">
        <div className="header-logo">
          <a href="/dashboard">
            <img src={cafe} />
            <span className="h1">cafenual</span>
          </a>
        </div>

        <div className="header-nav">
          <div className="left-nav">
            <ul>
              {/* 목록 태그 */}
              <li>
                <NavLink to={`/dashboard` || `/staff`} activStyle={activeStyle}>
                  <BsGrid />
                  <span>대시보드</span> {/*div와 비슷하지만 인라인 타입*/}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/menu"} activStyle={activeStyle}>
                  <BiFoodMenu />
                  <span>메뉴레시프</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/notice"} activStyle={activeStyle}>
                  <BiBell />
                  <span>공지사항</span>{" "}
                  {/*exact가 붙으면 notice만 활성화되게, 안붙으면 23이 붙어도 활성화가 됨*/}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/handover"} activeStyle={activeStyle}>
                  <BiCalendarEdit />
                  <span>인수인계</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/management"} activeStyle={activeStyle}>
                  <BsCardList />
                  <span>직원관리</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li>
                <a href="/" onClick={onLogout}>
                  로그아웃
                </a>
              </li>
            </ul>
            {/* {user.email && (
              <>
                <div>{user.name}님 안녕하세요</div>
                <button onClick={onLogout}>로그아웃</button>
              </>
            )}
            {!user.email && (
              <>
                <button>로그인</button>
                <button>회원가입</button>
              </>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
