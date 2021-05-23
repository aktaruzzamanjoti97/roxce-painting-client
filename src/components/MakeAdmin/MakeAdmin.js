import React, { useState } from "react";
import Sidebar from "../Dashborad/Sidebar/Sidebar";

const MakeAdmin = () => {
  const [admin, setAdmin] = useState();
  const handleChange = (e) => {
    const newData = { ...admin };
    newData[e.target.name] = e.target.value;
    setAdmin(newData);
  };

  const handleClick = () => {
    console.log("clicked");

    fetch("https://desolate-badlands-10830.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            alert("Admin Added Successfully");
        }
    })
  };


  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 p-5">
        <h3 className="text-success">Make Admin</h3>
        <div className="row">
          <div className="col-md-6">
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Enter email to make Admin"
            />
          </div>
          <div className="col-md-3 text-start">
            <button onClick={handleClick} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
