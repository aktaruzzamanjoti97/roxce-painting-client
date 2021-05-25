import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import BookingListChild from "../Dashborad/BookingListChild/BookingListChild";
import Sidebar from "../Dashborad/Sidebar/Sidebar";

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [specificUser, setSpecificUser] = useState([]);

  useEffect(() => {
    fetch("https://desolate-badlands-10830.herokuapp.com/bookingList?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        setSpecificUser(data);
      });
  }, []);

  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <div className="row">
          <h1 className="text-center text-success">Your Ordered Services</h1>
          {
              specificUser.map((user) => <BookingListChild user={user}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default BookingList;
