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
import ScheduleEmployee from '../components/ScheduleEmployee/ScheduleEmployee';
import Setting from '../components/Setting/Setting';




function mapStateToProps(state) {
    return {
        employee: state.user,
        settings: state.settings,
        settingShifts:state.settingShifts
    };
}

function Routess(props) {
    useEffect(() => { }, [])
    
    let { employee, settings,settingShifts } = props;
    return (
        <div>
            <Routes>
                {employee.id === 1 && <Route path="/EmployeesList" element={<EmployeeList />} />}
                <Route path="/Login" element={<Login />} />
                {employee.id === 1 && <Route path="/Register" element={<Register />} />}
                <Route path="/Schedule" element={<ScheduleManager />} />
                {employee.id === 1 && <Route path="/Setting" element={<Setting />} />}
                {employee.id !== 1 && <Route path="/ScheduleEmployee" element={<ScheduleEmployee />} />}
                <Route path="/Details" element={<Details />} />
                <Route path="/Navbar" element={<Navbar />} />
                <Route path="/" element={<Login />} />

           {/* <Routes>
                <Route path="/EmployeesList" element={<EmployeeList/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" element={<Register/>} />
                <Route path="/Schedule" element={<ScheduleManager/>} />
                <Route path="/ScheduleEmployee" element={<ScheduleEmployee/>} />
                <Route path="/Details" element={<Details/>} />
                <Route path="/Navbar" element={<Navbar/>} />
                <Route path="/" element={<Login/>} /> */}

            </Routes>
        </div>
    );
}
export default connect(mapStateToProps)(Routess)
