import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import AddService from "./components/Dashborad/AddService/AddService";
import Dashboard from "./components/Dashborad/Dashboard/Dashboard";
import ManageProducts from "./components/Dashborad/ManageProducts/ManageProducts";
import Shipment from "./components/Dashborad/Shipment/Shipment";
import Checkout from "./components/Dashborad/Checkout/Checkout";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageService">
            <ManageProducts />
          </Route>
          <Route path="/shipment/:id">
            <Shipment />
          </Route>
          <Route path='/checkout/:id'>
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
