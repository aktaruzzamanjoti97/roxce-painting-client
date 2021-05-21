import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import AllBookingsChild from "../AllBookingsChild/AllBookingsChild";
import Sidebar from "../Sidebar/Sidebar";

const AllBookings = () => {
  const [orders, setOrders] = useState([]);

  const loadData = () => {
    fetch(`http://localhost:5000/orderList`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleChange = (id) => {
    const updateStat = document.getElementById(`status-${id}`).value;
    // console.log(document.getElementById(`status-${id}`));
    // console.log(updateStat);

    fetch(`http://localhost:5000/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: updateStat }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("updated");
        if (data) {
          loadData();
        }
      });
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="row col-md-10 pt-5">
        {/* <AllBookingsChild orders={orders}/> */}
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
                <td>
                  {
                    <select
                      defaultValue={order?.status}
                      id={`status-${order._id}`}
                      onChange={() => handleChange(order._id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="onGoing">On Going</option>
                      <option value="shipped">Shipped</option>
                    </select>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllBookings;
