import React from 'react';
import { Button } from 'react-bootstrap';
import './Admin.css';
import {Link} from 'react-router-dom';

const Admin = () => {
    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>This page takes you to Admin Dashboard.</h2>
                <h4>If you want to admin access,</h4>
                <h4>email at <span className="text-danger">aktaruzzamanjoti97@gmail.com</span> </h4>
                <Button as={Link} to="/login" variant="warning"> Take me to login page </Button>
            </div>
        </div>
    );
};

export default Admin;