import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { UserContext } from "../../../App";

const SimplePayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      const newData = { ...loggedInUser };
      newData.paymentInfo = paymentMethod;
      setLoggedInUser(newData);

      if (paymentMethod.id) {
        fetch(`https://desolate-badlands-10830.herokuapp.com/placeOrder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loggedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data) {
              alert("Your Order Placed Successfully");
            }
          });
      } else {
        alert("Your Information Saving. Please wait...");
      }
    }
  };

  return (
    <div>
      <form className="w-50 my-5 mx-3" onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <button className="btn btn-info" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
        paymentError && <p className="text-danger">{paymentError}</p>
      }
      {
        paymentSuccess && <p className="text-success">Your Payment was successful</p>
      }
    </div>
  );
};

export default SimplePayment;
