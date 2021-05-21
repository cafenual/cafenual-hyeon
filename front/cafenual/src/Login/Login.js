import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [userpw, setUserPw] = useState("");

  const onChangeId = (e) => {
    //e.target.value는 내가 치는 값
    setUserId(e.target.value);
  };

  const onChangePw = (e) => {
    //e.target.value는 내가 치는 값
    setUserPw(e.target.value);
  };

  return (
    <div>
      <div id="body">
        <form id="login-form">
          <h1>cafenual</h1> 
          <input
            type="text"
            placeholder="아이디"
            id="user-id"
            onChange={onChangeId}
          />{" "}
          {/* onChange를 할때 onChangeId함수를 사용해라*/}
          <input
            type="password"
            placeholder="비밀번호"
            id="user-pass"
            onChange={onChangePw}
          />
          <input type="submit" value="로그인" />
          <a className="sign_up">회원가입</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
