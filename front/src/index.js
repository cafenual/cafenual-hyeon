import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "modules";
import { Provider } from "react-redux";
import { SetUser } from "modules/users";

function loadUser() {
  try {
    let user = sessionStorage.getItem("user"); //get잉께 sessionStorage에 user있음 가져오랑께
    if (!user) return;

    store.dispatch(SetUser(JSON.parse(user))); //들여보낼때 문자열로 넣었으니 꺼낼때는 json으로 꺼내오자 json으로 변형
  } catch (e) {
    console.log("logUser 오류");
  }
}

loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//제일 먼저 렌더링 되는 아이
