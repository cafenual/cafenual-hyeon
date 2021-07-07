import Commute from "pages/Commute";
import Join from "pages/Join";
import Login from "pages/Login";
import DashBoard from "pages/DashBoard";
import NoticeList from "pages/Notice/NoticeList";
import NoticeUpload from "pages/Notice/NoticeUpload";
import NoticeDetail from "pages/Notice/NoticeDetail";
import NoticeEdit from "pages/Notice/NoticeEdit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MenuView from "pages/MenuRecipe/MenuList";
import MenuDetail from "pages/MenuRecipe/MenuDetail";
import MenuUpload from "pages/MenuRecipe/MenuUpload";
import MenuEdit from "pages/MenuRecipe/MenuEdit";
import MenuCategoryEdit from "pages/MenuRecipe/MenuCategoryEdit";
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
            <Route path="/notice/edit" exact component={NoticeEdit} />
            <Route path="/notice/:detaiid?" exact component={NoticeDetail} />
            <Route
              path="/menu/detail/:recipeName?"
              exact
              component={MenuDetail}
            />
            <Route path="/menu/upload" exact component={MenuUpload} />
            <Route path="/menu/edit" exact component={MenuEdit} />
            <Route
              path="/menu/categoryedit"
              exact
              component={MenuCategoryEdit}
            />
            <Route path="/menu/:categoryid?" exact component={MenuView} />{" "}
            {/*categoryid는 변수이름*/}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
