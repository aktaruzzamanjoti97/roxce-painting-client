import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "react-bootstrap";

const Checkout = () => {
  const { id } = useParams();

  const [checkout, setCheckout] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://desolate-badlands-10830.herokuapp.com/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data[0]);
        const newData = { ...loggedInUser };
        newData.selectedService = data[0];
        setLoggedInUser(newData);
      });
  }, []);

  console.log(checkout);

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
          <h1 className="text-info mb-4">CheckOut</h1>
        {/* <div className="checkout-style">
          
          <img style={{width: '300px'}} src={checkout.imageURL} alt="" />
          <h1>{checkout.name}</h1>
          <p>{checkout.smPrice} $</p>
          <p>{checkout.lgPrice} $</p>
          <Link to={`/shipment`}>
            <Button variant="danger">Go to shipment page</Button>
          </Link>
        </div> */}
        <div className="row">
          <div className="col-md-4">
          <div className="rounded box-style" style={{}}>
        <img
          style={{ height: "180px", width: "100%" }}
          src={checkout.imageURL}
          alt=""
        />
        <div style={{ margin: "15px", padding: "15px" }} className="w-60">
          <h4>{checkout.name}</h4>
          <p>Small Area: $ {checkout.smPrice}</p>
          <p>Large Area: $ {checkout.lgPrice}</p>
          <Link to={`/shipment`}>
            <Button variant="danger">Go to shipment page</Button>
          </Link>
        </div>
      </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout;
