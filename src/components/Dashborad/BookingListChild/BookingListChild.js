import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const BookingListChild = (props) => {
  const { selectedService, serviceDate, shipmentInfo, status } = props.user;

  return (
    <div className="col-md-4 offset-md-1">
      <Card className="my-3 box-style" style={{}}>
        <div className="d-flex">
          <Card.Img
            style={{ height: "150px", width: "200px", padding: "20px" }}
            variant="top"
            src={selectedService.imageURL}
          />
          <Card.Text className="my-5">
            {status === "pending" ? (
              <span
                style={{
                  backgroundColor: "yellow",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                {status}
              </span>
            ) : status === "shipped" ? (
              <span
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "7px",
                  borderRadius: "5px",
                }}
              >
                {status}
              </span>
            ) : (
              <span
                style={{
                  backgroundColor: "lightCoral",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {status}
              </span>
            )}
          </Card.Text>
        </div>
        <Card.Body>
          <Card.Title>{shipmentInfo.service}</Card.Title>

          <Card.Text>
            Name: <span className="mx-2 text-success">{shipmentInfo.name}</span>
          </Card.Text>
          <Card.Text>
            Customer Email:{" "}
            <span className="text-danger">br{shipmentInfo.email}</span>
          </Card.Text>
          <Card.Text>
            Servicing Date:{" "}
            <span className="text-info">
              <br /> {serviceDate}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BookingListChild;
