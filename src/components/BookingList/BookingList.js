import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../Dashborad/Sidebar/Sidebar";

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [specificUser, setSpecificeUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/bookingList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }, [])

  return (
    <div className="container-fluid row">
        <div className="col-md-2">
            <Sidebar />
        </div>
        <div className="col-md-10">

        </div>
      
    </div>
  );
};

export default BookingList;
