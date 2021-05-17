import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddService = () => {
  const [imageURL, setImageURL] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.srName,
      smPrice: data.smPrice,
      lgPrice: data.lgPrice,
      imageURL: imageURL,
    };
    console.log(eventData);

    const url = `http://localhost:5000/addService`;

    if (imageURL !== null) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      })
      .then(res => console.log('server site responded', res))
    }
    else{
      alert('image uploading, please wait')
    }
    console.log(imageURL);
    setImageURL(null);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "53b5d9877011225bc9355aa79c8c0df0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const showAdd = () =>{
    const text = "New Service Added";
    alert(text);
  }

  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-9 p-4 pr-5">
        <h5 className="text-brand">Add a Service</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="srName">Service Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Service Name"
                  {...register("srName", { required: true })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Small Area</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price for Small Area"
                  {...register("smPrice", { required: true })}
                />
              </div>

              <br />
            </div>
            <div className="col-md-6 col-12 col-sm-12">
              <div className="form-group">
                <label htmlFor="srImage">Upload Image</label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lgPrice">Entire Area</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price for Entire Area"
                  {...register("lgPrice", { required: true })}
                />
              </div>
              <br />
            </div>
          </div>
          <div className="text-end">
            <input onClick={showAdd} className="btn btn-warning" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
