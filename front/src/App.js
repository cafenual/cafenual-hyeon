import Commute from "./pages/Commute";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        {" "}
        {/* 처음을 로그인화면을 하고 그때에는 헤더가 안뜨게 할수는 없을까? */}
        <div id="main">
          <Switch>
            <Route path="/" component={Login} />{" "}
            {/*제일 처음에 나오는 root페이지로 로그인을 나오게 해달라*/}
            <Route path="/commute" component={Commute} />
            <Route path="/join" component={Join} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
