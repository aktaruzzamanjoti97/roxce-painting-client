import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...loggedInUser };
    newData.shipmentInfo = data;
    setLoggedInUser(newData);

    if (loggedInUser.shipmentInfo) {
      fetch(`http://localhost:5000/placeOrder`, {
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
      alert("Shipment Information Saving. Please wait and then press submit button");
    }
  };

  console.log(loggedInUser);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-7 mt-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            defaultValue={loggedInUser.name}
            {...register("name")}
            required
          />

          <label htmlFor="email">Email</label>
          {/* <input
            className="form-control"
            {...register("email", { required: true })}
          /> */}
          <input
            className="form-control"
            defaultValue={loggedInUser.email}
            {...register("email")}
            required
          />

          <label htmlFor="service">Service Name</label>
          <input className="form-control" {...register("service")} required />
          <br />

          <input className="btn btn-info" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
