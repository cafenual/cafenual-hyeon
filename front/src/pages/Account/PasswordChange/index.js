import Header from "layouts/Header";
import React, { useState } from "react";
import "./styles.css";

const PasswordChange = () => {
  const [UserPw, setUserPw] = useState("");
  const [UserPwCheck, setUserPwCheck] = useState("");

  const onChangePw = (e) => {
    setUserPw(e.target.value);
  };
  const onChangePwCheck = (e) => {
    setUserPwCheck(e.target.value);
  };

  const onSubmitCheck = (e) => {
    e.preventDefault(); //console을 확인하기 위해 submit을 막아놈(새로고침 막음)
    const num = UserPw.search(/[0-9]/g);
    const eng = UserPw.search(/[a-z]/gi);

    if (UserPw.length < 8 || UserPw.length > 20) {
      alert("비밀번호는 8자 이상 20자 이하입니다");
      return false;
    }
    if (num < 0 || eng < 0) {
      alert("영문, 숫자를 혼합하여 입력해주세요");
      return false;
    }
    if (UserPw !== UserPwCheck) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
  };
  return (
    <div id="PasswordChange" className="page-layout">
      <Header />
      <div className="all-block">
        <div className="top-block">
          <div className="title">비밀번호 변경</div>
        </div>
        <form onSubmit={onSubmitCheck}>
          <div className="middle-block">
            <label>
              비밀번호
              <input
                type="password"
                className="password-input"
                required
                onChange={onChangePw}
              />
            </label>
            <div class="explain">
              비밀번호는 영문과 숫자 포함하여 8글자 이상, 20글자 이하
            </div>
            <label>
              비밀번호 확인
              <input type="password" required onChange={onChangePwCheck} />
            </label>
          </div>
          <div className="bottom-block">
            <button type="submit">변경</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
