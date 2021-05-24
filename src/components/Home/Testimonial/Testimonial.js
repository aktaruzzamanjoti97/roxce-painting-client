import React from "react";

const Testimonial = (props) => {
  const { city, name, review, imageURL } = props.testimonial;
  return (
    <div className="card shadow-sm col-md-4 py-5">
      <div className="card-body text-center">
        <div className="text-center">
        <img src={imageURL} alt="" style={{height: '100px'}} />
        </div>  
        <p className="card-text text-center pt-3">{review}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <div className="d-flex">
          <h5 className="text-primary">{name}</h5>
          <p style={{ color: "#f9865a" }} className="ml-5">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
