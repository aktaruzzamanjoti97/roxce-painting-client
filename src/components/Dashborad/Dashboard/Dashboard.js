import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Login from '../../Login/Login/Login';
import AddService from '../AddService/AddService';

const Dashboard = () => {
    return (
        <div>
            <Switch>
                <Route path="/dashboard">
                    <AddService />
                </Route>
                <Route path="/addService">
                    <AddService />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;