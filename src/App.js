import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import Order from "./components/Order/Order";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <PrivateRoute path="/checkout/:productId">
            <CheckOut/>
          </PrivateRoute>

          <PrivateRoute path="/order">
            <Order/>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin/>
          </PrivateRoute>

          <Route path="*">
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
