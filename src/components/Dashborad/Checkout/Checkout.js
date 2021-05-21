import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import {Link} from 'react-router-dom';

const Checkout = () => {

    const {id} = useParams();

    const [checkout, setCheckout] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://desolate-badlands-10830.herokuapp.com/oneService/${id}`)
        .then(res => res.json())
        .then(data => {
            setCheckout(data[0]);
            const newData = {...loggedInUser};
            newData.selectedService = data[0];
            setLoggedInUser(newData);
        })

    }, []);

    console.log(loggedInUser);



    return (
        <div>
            <h1>{checkout.name}</h1>
            <h3>{checkout.smPrice}</h3>
            <h4>{checkout.lgPrice}</h4>
            <img src={checkout.imageURL} alt="" />
            <Link to={`/shipment`}><button>Go to shipment page</button></Link>
        </div>
    );
};

export default Checkout;