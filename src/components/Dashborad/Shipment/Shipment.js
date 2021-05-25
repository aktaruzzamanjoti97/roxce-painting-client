import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const Shipment = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {

    setSelectedDate(date);
  };

  const onSubmit = (data) => {
    const newData = { ...loggedInUser };
    newData.shipmentInfo = data;
    newData.status = "pending";
    newData.serviceDate = selectedDate;
    setLoggedInUser(newData);

    history.push("/payment");
  };

  console.log(loggedInUser);


  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-7 mt-3">
        <h1 className="text-primary">Place Your Order</h1>
        <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            defaultValue={loggedInUser.name}
            {...register("name")}
            required
          />

          <label htmlFor="email">Email</label>

          <input
            className="form-control"
            defaultValue={loggedInUser.email}
            {...register("email")}
            required
          />

          <label htmlFor="service">Service Name</label>
          <input
            defaultValue={loggedInUser.selectedService?.name}
            className="form-control"
            {...register("service")}
            required
          />
          <br />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Service Date Dialog"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Pick Service Time"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <input className="btn btn-info mt-5" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
