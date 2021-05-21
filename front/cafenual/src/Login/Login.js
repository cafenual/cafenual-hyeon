import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div id="body">
        <form id="login-form">
          <h1>cafenual</h1>
          <input type="text" placeholder="아이디" id="user-id"></input>
          <input type="password" placeholder="비밀번호" id="user-pass"></input>
          <input type="submit" value="로그인"></input>
          <a class="sign_up">회원가입</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
