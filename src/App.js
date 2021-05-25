import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import AddService from "./components/AddService/AddService";
import Dashboard from "./components/Dashborad/Dashboard/Dashboard";
import ManageProducts from "./components/Dashborad/ManageProducts/ManageProducts";
import Shipment from "./components/Dashborad/Shipment/Shipment";
import Checkout from "./components/Dashborad/Checkout/Checkout";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import BookingList from "./components/BookingList/BookingList";
import AllBookings from "./components/AllBookings/AllBookings";
import Payment from "./components/Dashborad/Payment/Payment";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import AddReview from "./components/AddReview/AddReview";
import Admin from "./components/Admin/Admin";

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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageService">
            <ManageProducts />
          </Route>
          <Route path="/shipment">
            <Shipment />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route exact path="/allBookings">
            <AllBookings />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
