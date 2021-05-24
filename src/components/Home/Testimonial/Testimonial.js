import React from "react";

const Testimonial = (props) => {
  const { city, name, review, imageURL } = props.testimonial;
  return (
    <div className="card shadow-sm col-md-4 py-5">
      <div className="card-body text-center">
        <div className="text-center">
        <img src={imageURL} alt="" style={{height: '150px', borderRadius: '50% 30%'}} />
        </div>  
        <p className="card-text text-center pt-3">{review}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <div className="d-flex justify-content-between">
          <h4 className="text-success mr-5">{name}</h4>
          <p style={{ color: "#f9865a" }} className="ml-5">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
