import React, { useState } from "react";
import Sidebar from "../Dashborad/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddReview = () => {
  const [imageURL, setImageURL] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // const eventData = {
    //   name: data.name,
    //   city: data.city,
    //   lgPrice: data.lgPrice,
    //   imageURL: imageURL,
    // };
    // console.log(eventData);

    

    // const url = `https://desolate-badlands-10830.herokuapp.com/addService`;

    // if (imageURL !== null) {
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(eventData),
    //   }).then((res) => console.log("server site responded", res));
    // } else {
    //   alert("image uploading, please wait");
    // }
    // console.log(imageURL);
    // setImageURL(null);
  };

  const handleChange = (e) => {
    const textData = e.target.value;
    
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

  const showAdd = () => {
    const text = "New Service Added";
    alert(text);
  };

  return (
    <div className="container-fluid row">
      <Sidebar />
      <div
        style={{ position: "absolute", right: "0" }}
        className="col-md-9 py-5"
      >
        <h5 className="text-brand">Add Review</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Your City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter where you live in "
                  {...register("city")}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Upload Your Image</label>
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Feedback Area</label>
                <textarea
                  onChange={handleChange}
                  name="review"
                  className="form-control"
                  placeholder="Write your feedback"
                  id=""
                  cols="20"
                  rows="6"
                ></textarea>
              </div>
              <input
                onClick={showAdd}
                className="btn btn-warning"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
