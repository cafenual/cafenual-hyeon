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
import HandOverUpload from "pages/HandOver/HandOverUpload";
import HandOverList from "pages/HandOver/HandOverList";
import HandOverDetail from "pages/HandOver/HandOverDetail";
import HandOverEdit from "pages/HandOver/HandOverEdit";
import HandOverListEdit from "pages/HandOver/HandOverListEdit";
import NoticeListEdit from "pages/Notice/NoticeListEdit";
import Account from "pages/Account/Identify";
import AccountPersonalInfo from "pages/Account/PersonalInfo";
import AccountPasswordChange from "pages/Account/PasswordChange";

import precat from "components/EmptyPages/Category";
import precated from "components/EmptyPages/CategoryEdit";
import predetail from "components/EmptyPages/Detail";
import prelist from "components/EmptyPages/List";
import pruped from "components/EmptyPages/UploadOrEdit";

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
            <Route path="/notice/upload" exact component={NoticeUpload} />
            <Route
              path="/notice/edit/:Noticeid?"
              exact
              component={NoticeEdit}
            />
            <Route path="/notice/listedit" exact component={NoticeListEdit} />
            <Route path="/notice/:typeid?" exact component={NoticeList} />
            <Route
              path="/notice/detail/:noticeid?"
              exact
              component={NoticeDetail}
            />
            <Route
              path="/menu/detail/:recipeName?"
              exact
              component={MenuDetail}
            />
            <Route path="/menu/upload" exact component={MenuUpload} />
            <Route path="/menu/edit/:menuname?" exact component={MenuEdit} />
            <Route
              path="/menu/categoryedit"
              exact
              component={MenuCategoryEdit}
            />
            <Route path="/menu/:categoryid?" exact component={MenuView} />{" "}
            {/*categoryid는 변수이름*/}
            <Route path="/handover/upload" exact component={HandOverUpload} />
            <Route
              path="/handover/listedit"
              exact
              component={HandOverListEdit}
            />
            <Route path="/handover/:typeid?" exact component={HandOverList} />
            <Route
              path="/handover/detail/:HandOverid?"
              exact
              component={HandOverDetail}
            />
            <Route
              path="/handover/edit/:HandOverid?"
              exact
              component={HandOverEdit}
            />
            <Route path="/account" exact component={Account} />
            <Route
              path="/account/personalinfo"
              exact
              component={AccountPersonalInfo}
            />
            <Route
              path="/account/personalinfo/passwordchange"
              exact
              component={AccountPasswordChange}
            />
            {/* */}
            <Route path="/pre/cat" exact component={precat} />
            <Route path="/pre/catedit" exact component={precated} />
            <Route path="/pre/detail" exact component={predetail} />
            <Route path="/pre/list" exact component={prelist} />
            <Route path="/pre/upored" exact component={pruped} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
