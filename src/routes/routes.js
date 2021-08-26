import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../components/Login/Login'
import Register from '../components/Register/Register';
import ScheduleManager from '../components/ScheduleManager/ScheduleManager';

function Routes(props) {
    useEffect(() => { }, [])

    return (
        <Router>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/ScheduleManager" component={ScheduleManager} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
}
export default Routes;
