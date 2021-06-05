import Commute from "./pages/Commute";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <div id="main">
          <Switch>
            {/*/로만 남겨놨었는데 그러니깐 다른 아이들이 안넘어가짐*/}
            <Route path="/login" component={Login} />
            <Route path="/commute" component={Commute} />
            <Route path="/join" component={Join} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
