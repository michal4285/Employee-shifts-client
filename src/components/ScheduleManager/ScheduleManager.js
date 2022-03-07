import React, { useEffect, useState ,Component} from 'react';
import './ScheduleManager.css';
import { connect } from 'react-redux';
import API from '../../config/env/local'
import FullCalendarApp from './Calendar';


export default function FullCalendar() {
  return (
    <div className="App" style={{}}>
      <FullCalendarApp />
    </div>
  );
}