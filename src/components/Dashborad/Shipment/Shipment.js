import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-7 mt-3 mx auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input className="form-control" defaultValue="test" {...register("name")} />

          <label htmlFor="email">Email</label>
          <input className="form-control" {...register("email", { required: true })} />
          
          <label htmlFor="email">Service Name</label>
          <input className="form-control" {...register("email", { required: true })} />
          <br />

          <input className="btn btn-info" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
