import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AllBookingsChild = ({ orders }) => {
  let history = useHistory();
  // const [newOrder, setNewOrder] = useState([])

  const loadData = () => {
    fetch(`http://localhost:5000/orderList`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            // setNewOrder(data)
        })
  }

  // const handleClick = (id) => {
  //   history.push(`/allBookings/${id}`);
  // };

  const handleChange = id =>{
    const status = document.getElementById('status').value;

    fetch(`https://localhost:5000/updateStatus/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({status: status})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data){
        loadData();
      }
    })
  }

  return (
    <Table responsive>
      <thead>
        <tr className="text-light bg-dark">
          <th>Ordered Product</th>
          <th>Ordered By</th>
          <th>Ordered Email</th>
          <th>Order Status</th>
          {/* <th>View Order</th> */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr>
            <td>{order.selectedService?.name}</td>
            <td>{order.shipmentInfo?.name} </td>
            <td>{order.shipmentInfo?.email} </td>
            {/* <td>{order.status}</td> */}
            <div>
              {
                <select
                  id="status"
                  value={order?.status}
                  onChange={() => handleChange(order._id)}
                  name="status"
                  id=""
                >
                  <option value="pending">Pending</option>
                  <option value="onGoing">On Going</option>
                  <option value="shipped">Shipped</option>
                </select>
              }
             
            </div>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllBookingsChild;
