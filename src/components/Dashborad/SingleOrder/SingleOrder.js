import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {
  
    useParams
  } from "react-router-dom";
  

const SingleOrder = () => {
    const [singleOrder, setSingleOrder] = useState({})
    const [update, setUpdate] = useState();

    const { orderId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder/${orderId}`)
        .then(res => res.json())
        .then(data => setSingleOrder(data[0]))
    },[]);

    const handleChange = e =>{
        const newData = {...update};
        newData[e.target.name] = e.target.value;
        setUpdate(newData);
    };

  
    const handleClick = (id) =>{
       console.log(id);
        console.log('hit inside');
        console.log(update);
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'updated')
        })
    }

    console.log(update)

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h1>{singleOrder.selectedService?.name}</h1>
                <h3>{singleOrder._id}</h3>
                <select id='status' defaultValue={singleOrder?.status} onChange={handleChange} name="status" id="">
                    <option value="pending">Pending</option>
                    <option value="onGoing">On Going</option>
                    <option value="shipped">Shipped</option>
                </select>
                <button onClick={() => handleClick(singleOrder._id)}>Update</button>
            </div>  
        </div>
    );
};

export default SingleOrder;