import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useHistory } from "react-router-dom";

const Join = () => {
  const history = useHistory(); //useHistory -> 주소를 바꿀수 있도록 도와주는 hooks
  //예를들면 회원가입에 성공했으면 로그인페이지로 이동하게 해주는

  const [form, setForm] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    passwordCheck: "",
  });
  const [text, setText] = useState("");

  const { email, name, phoneNumber, password, passwordCheck } = form; //비구조 할당 form.email을 안쓰고 email로 쓸수 있게함

  const onChange = (e) => {
    console.log(e.target);
    const nextForm = {
      //불필요한 리렌더링이 잃어나지 않게 form으로
      ...form, //form복사해옴
      [e.target.name]: e.target.value, //name은 여기서 내가 말한 이름 name이 아니라 변수명 name을 말함
      //지금까지는 form을 복사해서 안에 내용물을 바꿔줌
    };
    setForm(nextForm); //여기서 form을 덮어 씌어줌
  };

  const onSubmit = (e) => {
    e.preventDefault(); //예방하다 default가 기본 즉 submit은 새로고침이 기본이기때문에 그거예방

    const num = password.search(/[0-9]/g);
    const eng = password.search(/[a-z]/gi);
    if (password.length < 8 || password.length > 20) {
      setText("* 비밀번호는 8자 이상 20자 이하입니다");
      return false;
    }
    if (num < 0 || eng < 0) {
      setText("* 영문, 숫자를 혼합하여 입력해주세요");
      return false;
    }
    if (password !== passwordCheck) {
      setText("* 비밀번호가 일치하지 않습니다");
      return false;
    }

    console.log("저 실행됬어요!!!");
    console.log(form);

    const body = {
      //백엔드 바디
      email,
      password,
      name,
      phoneNumber,
    };

    axios
      .post("http://localhost:4000/api/user/register", body)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          //회원가입에 성공하면
          history.push("/");
        }
      });
  };

  return (
    <div id="Join">
      <div className="join-form">
        <center>
          <div className="joinform_title">회원가입</div>
        </center>
        <form onSubmit={onSubmit} className="form-block">
          {/*onSubmit={onSubmitCheck} */}
          <label>
            이름
            <input
              className="join-input"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            이메일
            <div class="email_check">
              <center>
                <a href="">이메일 확인</a>
              </center>
            </div>
            <input
              className="join-input"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </label>
          <label>
            비밀번호
            <input
              className="password_input"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
            {/*onChange={onChangepw}*/}
            <div class="explain">
              비밀번호는 영문과 숫자 포함하여 8글자 이상, 20글자 이하
            </div>
          </label>
          <lavel>
            비밀번호 확인
            <input
              className="join-input"
              type="password"
              name="passwordCheck"
              value={passwordCheck}
              onChange={onChange}
              required
            />
            {/*onChange={onChangepwCheck} */}
          </lavel>
          <label>
            전화번호
            <input
              className="join-input"
              type="number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit">가입하기</button>
          <div className="error-text">{text}</div>
        </form>
      </div>
    </div>
  );
};

export default Join;
