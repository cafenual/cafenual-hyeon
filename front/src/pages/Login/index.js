import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [userpw, setUserPw] = useState("");

  const onChangeId = (e) => {
    setUserId(e.target.value);
  };

  const onChangePw = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div id="Login">
      <div className="back-ground">
        <div className="login-form">
          <div className="login-title">Login</div>
          <form>
            <input
              type="text"
              placeholder="사원번호"
              id="user-id"
              onChange={onChangeId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              id="user-pass"
              onChange={onChangePw}
            />
            <div className="login-manage">
              <div className="join_link">
                <a href="/join">회원가입</a>
              </div>
              <div className="find_accounts">
                <a href="">아이디 찾기</a>
                <span> | </span>
                <a href="">비밀번호 찾기</a>
              </div>
            </div>
            <button type="submit" className="login-btn">
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
