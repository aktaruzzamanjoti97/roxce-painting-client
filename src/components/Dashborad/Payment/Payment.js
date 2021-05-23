import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimplePayment from "./SimplePayment";
import Sidebar from "../Sidebar/Sidebar";

const stripePromise = loadStripe(
  "pk_test_51Ie6d5FCQpj70iz4R0RKmk1rSt14lO0YMNNpZDdUcnfuh34vM2CDOEhQtMRcM4NyzOVhQ8SSYmpMHHE6SLjrQG9u00t6mH0PFw"
);

const Payment = () => {
  return (
    <div className="row">
     
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10">
        <h1 className="text-warning">Please Pay</h1>
        <Elements stripe={stripePromise}>
          <SimplePayment />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
