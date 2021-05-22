import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';

const ManageProducts = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch(`https://desolate-badlands-10830.herokuapp.com/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-8 offset-md-1 mt-3">
                <ManageProduct services={services}/>
            </div>
        </div>
    );
};

export default ManageProducts;