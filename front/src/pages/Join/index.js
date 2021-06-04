import React, { useState } from "react";
import "./styles.css";

const Join = () => {
  const [userpw, setUserPw] = useState("");
  const [userpwCheck, setUserPwCheck] = useState("");

  const onChangepw = (e) => {
    setUserPw(e.target.value);
  };
  const onChangepwCheck = (e) => {
    setUserPwCheck(e.target.value);
  };

  const onSubmitCheck = (e) => {
    e.preventDefault(); //console을 확인하기 위해 submit을 막아놈(새로고침 막음)
    const num = userpw.search(/[0-9]/g);
    const eng = userpw.search(/[a-z]/gi);

    if (userpw.length < 8 || userpw.length > 20) {
      alert("비밀번호는 8자 이상 20자 이하입니다");
      return false;
    }
    if (num < 0 || eng < 0) {
      alert("영문, 숫자를 혼합하여 입력해주세요");
      return false;
    }
    if (userpw !== userpwCheck) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
  };

  return (
    <div id="Join">
      <div class="back_ground">
        <div class="container">
          <center>
            <h1 class="title">cafenual</h1>
          </center>
          <form class="middle" onSubmit={onSubmitCheck}>
            이름
            <br />
            <br />
            <input type="text" name="user_id" required />
            <br />
            이메일
            <div class="email_check">
              <center>
                <a>이메일 확인</a>
                <br />
                <br />
              </center>
            </div>
            <input type="email" name="user_email" required />
            <br />
            비밀번호
            <br />
            <br />
            <input
              type="password"
              id="user_password"
              required
              onChange={onChangepw}
            />
            <br />
            <div class="membership_explain">
              비밀번호는 영문과 숫자 포함하여 8글자 이상, 20글자 이하
            </div>
            비밀번호 확인
            <br />
            <br />
            <input
              type="password"
              id="user_password_check"
              required
              onChange={onChangepwCheck}
            />
            <br />
            <br />
            전화번호
            <br />
            <br />
            <input type="number" name="user_tel" required />
            <div class="membership_explain">
              전화번호를 입력할시 -포함하여 입력 ex) 010-0000-0000
            </div>
            <button type="submit">가입하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
