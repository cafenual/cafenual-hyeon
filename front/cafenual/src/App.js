import { Route, Switch } from "react-router";
import Login from "./Login/Login";
import Commuting from "./Commuting/Commuting";
import Membership from "./Membership/Membership";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/commuting" component={Commuting} />
        <Route exact path="/membership" component={Membership} />
      </Switch>
    </div>
  );
}

export default App;
/*
C:\Users\admin\OneDrive\문서\GitHub\cafenual-hyeon\front\cafenual\src\Login\Login.js
cafenual\src\Login\Login.js
*/
