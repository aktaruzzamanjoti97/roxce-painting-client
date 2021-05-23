import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className="card shadow-sm col-md-4 py-5">
      <div className="card-body text-center">
        <div className="text-center">
        <img src={img} alt="" style={{height: '100px'}} />
        </div>  
        <p className="card-text text-center pt-3">{quote}</p>
      </div>
      <div className="card-footer d-flex align-items-center">
        <div className="d-flex">
          <h5 className="text-primary">{name}</h5>
          <p style={{ color: "#f9865a" }} className="ml-5">
            {from}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
