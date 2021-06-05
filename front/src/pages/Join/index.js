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
      <div className="back-ground">
        <div className="join_form">
          <center>
            <div className="joinform_title">회원가입</div>
          </center>
          <form>
            <label>이름</label>
            <input type="text" name="user_id" required />
            <label>이메일</label>
            <div class="email_check">
              <center>
                <a>이메일 확인</a>
              </center>
            </div>
            <input type="email" name="user_email" required />
            <label>비밀번호</label>
            <input
              className="password_input"
              type="password"
              id="user_password"
              required
              onChange={onChangepw}
            />
            <div class="explain">
              비밀번호는 영문과 숫자 포함하여 8글자 이상, 20글자 이하
            </div>
            <lavel>비밀번호 확인</lavel>
            <input
              type="password"
              id="user_password_check"
              required
              onChange={onChangepwCheck}
            />
            <label>전화번호</label>
            <input type="number" name="user_tel" required />
            <button type="submit">가입하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
