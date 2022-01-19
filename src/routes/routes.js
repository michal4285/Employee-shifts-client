import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from '../components/Login/Login'
import Register from '../components/Register/Register';
import ScheduleManager from '../components/ScheduleManager/ScheduleManager';
import Details from '../components/Details/Details';
import EmployeeList from '../components/EmployeeList/EmployeeList';
import Navbar from '../components/Navbar/Navbar';

function Routess(props) {
    useEffect(() => { }, [])

    return (
        <div>
            <Routes>
                <Route path="/EmployeesList" element={<EmployeeList/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/ScheduleManager" element={<ScheduleManager/>} />
                <Route path="/Details" element={<Details/>} />
                <Route path="/Navbar" element={<Navbar/>} />
                <Route path="/" element={<Login/>} />
            </Routes>
            </div>
    );
}
export default Routess;
