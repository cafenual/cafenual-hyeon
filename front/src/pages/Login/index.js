import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const history = useHistory();

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form; //비구조 할당 form.email을 안쓰고 email로 쓸수 있게함

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

  const onSubmit = async (e) => {
    //async 기달려라를 하게해주는 엄마 역활
    e.preventDefault(); //예방하다 default가 기본 즉 submit은 새로고침이 기본이기때문에 그거예방
    console.log("저 실행됬어요!!!");
    console.log(form);

    const body = {
      //변수명을 body로 안보내도 상관없는데 통일성을 위해 변수명 통일
      //백엔드 바디
      email,
      password,
    };

    // axios
    //   .post("http://localhost:4000/api/user/login", body) //백엔드에 맞춰 post니깐 post
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.success) {
    //       //회원가입에 성공하면
    //       history.push("/dashboard");
    //     }
    //   }); 콜백함수(함수속에 함수 즉 함수속에서 리턴값을 가지고 리턴값을 매개변수로 하는 함수)
    //       콜백함수는 순차적으로 해서 상관없지만 요즘쓰는 거는 밑에문 개는 순차적이 아니므로
    //       기다리라고 await을 해주어야함

    try {
      await axios.post("http://localhost:4000/api/user/login", body);
      history.push("/");
    } catch (e) {
      setError(e.response.data.message); //비번 또는 아이디 잘못됬을때
    }
  };

  return (
    <div id="Login">
      <div className="back-ground">
        <div className="login-form">
          <div className="login-title">Login</div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="email"
              onChange={onChange}
              placeholder="이메일"
              id="user-id"
              required
            />
            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="비밀번호"
              id="user-pass"
              required
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
            <p>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
//mag3010@naver.com 123456789a
export default Login;
