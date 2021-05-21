import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";

const ManageProduct = ({ services }) => {

    const handleDeleteProduct = (id) =>{
        fetch(`https://desolate-badlands-10830.herokuapp.com/delete/${id}`,{
          method: "DELETE"
        })
        .then(res => res.json())
        .then(result => console.log('deleted successfully'))
    }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr className="text-light bg-dark">
            <th>Service Name</th>
            <th>Small Area</th>
            <th>Large Area</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr>
              <td>{service.name}</td>
              <td>{service.smPrice} $</td>
              <td>{service.lgPrice} $</td>
              <div>
                <button className="ml-4 mt-2 mr-2">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button style={{ color: "red" }} onClick={() => handleDeleteProduct(service._id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
