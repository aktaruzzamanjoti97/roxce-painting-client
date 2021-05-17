import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Checkout = () => {

    const {id} = useParams();

    const [checkout, setCheckout] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/oneService/${id}`)
        .then(res => res.json())
        .then(data => setCheckout(data[0]))
    }, []);

    console.log(checkout);

    return (
        <div>
            <h1>{checkout.name}</h1>
            <h3>{checkout.smPrice}</h3>
            <h4>{checkout.lgPrice}</h4>
            <img src={checkout.imageURL} alt="" />
        </div>
    );
};

export default Checkout;