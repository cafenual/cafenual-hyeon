import Commute from "pages/Commute";
import Join from "pages/Join";
import Login from "pages/Login";
import DashBoard from "pages/DashBoard";
import NoticeList from "pages/Notice/NoticeList";
import NoticeUpload from "pages/Notice/NoticeUpload";
import NoticeDetail from "pages/Notice/NoticeDetail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <div id="main">
          <Switch>
            <Route path="/dashboard" exact component={DashBoard} />
            <Route path="/" exact component={Login} />{" "}
            {/* exact를 안치면 정확하게가 아니어서 다른 페이지에 /가 붙어 있으므로 다른 페이지로 이동이 안됨 */}
            <Route path="/commute" component={Commute} />
            <Route path="/join" component={Join} />
            <Route path="/notice" exact component={NoticeList} />
            <Route path="/notice/upload" exact component={NoticeUpload} />
            <Route path="/notice/detail" component={NoticeDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
