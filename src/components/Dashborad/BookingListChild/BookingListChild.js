import React from "react";

const BookingListChild = (props) => {
  const { name, email, selectedService, shipmentInfo, status } = props.user;

  return (
    <div className="col-md-4 offset-md-1">
      <div style={{ margin:'5px', padding: '5px' }}>
        <div className="d-flex justify-content-between">
          <img
            style={{ width: "200px", height: '150px' }}
            src={selectedService.imageURL}
            alt=""
          />
          <div>
          <p>{status}</p>
          </div>
        </div>
        <div>
          <h5>{shipmentInfo.service}</h5>
          <p></p>
          <p>Shipping email: {email}</p>
        </div>
        
      </div>
    </div>
  );
};

export default BookingListChild;
