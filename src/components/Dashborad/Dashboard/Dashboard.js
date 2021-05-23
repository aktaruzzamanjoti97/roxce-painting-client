import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from '../../Login/Login/Login';
import AddService from '../../AddService/AddService';
import BookingList from '../../BookingList/BookingList';

const Dashboard = () => {

    return (
        <div>
            <Switch>
                <Route path="/dashboard">
                    <BookingList />
                </Route>
                <Route path="/addService">
                    <BookingList />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;