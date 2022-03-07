import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import { Calendar } from '@fullcalendar/core';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import API from '../../config/env/local'
import { event } from 'jquery';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { connect } from 'react-redux';
import { setemployee } from '../../redux/actions/user';
import listPlugin from '@fullcalendar/list';
import image6 from './6.jpg';
import image7 from './7.jpg';

function mapStateToProps(state) {
  return {
      employee: state.user,

  };
}


function FullCalendarApp(props) {
  const [open, setOpen] = useState(false);
    const { employee } = props
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [clickUser,setclickUser]=useState({employeeFirstName:"michal",employeeLastName:"prober",employeeAddress:"chazon hish",employeePhone:"0533114285",employeeEmail:"michalprober@gmail.com"})
    const [TimeShift,setTimeShift]=useState([])
    const [alert,setalert]=useState(false)


    const handleClickOpenEmployee = (start,id) => {
      fetch(`${API.LOGIN_URL}employee/GetEmployeeId?id=${id}`, {
        method: 'GET',
        // body: JSON.stringify({})
      })
        .then(res => res.json()).then(data => {
          debugger;
          console.log(data)
          if (data.Data != null) {
            let employee = data.Data
            setclickUser(employee)
            setTimeShift(start)
            setOpen(true);
          }
          else setalert(true)
        }
        ).catch(err =>setalert(true))
    };
  
    const handleCloseEmployee = () => {
      setOpen(false);
    };
 
  const events = [
    {
      id: 1,
      title: 'shoshana',
      start: '2022-02-20T00:00:00',
      end: '2022-02-20T07:00:00',
    },
    {
      id: 2,
      title: 'natan',
      start: '2022-02-20T00:00:00',
      end: '2022-02-20T07:00:00',
    },
    {
      id: 3,
      title: 'chayim',
      start: '2022-02-20T07:00:00',
      end: '2022-02-20T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'michal',
      start: '2022-02-20T16:00:00',
      end: '2022-02-20T23:59:60',
      color: "pink"
    },
    {
      id: 5,
      title: 'yael',
      start: '2022-02-20T16:00:00',
      end: '2022-02-20T23:59:60',
      color: "pink"
    },
    {
      id: 1,
      title: 'ester',
      start: '2022-02-21T00:00:00',
      end: '2022-02-21T07:00:00',
    },
    {
      id: 2,
      title: 'elchanan',
      start: '2022-02-21T00:00:00',
      end: '2022-02-21T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2022-02-21T07:00:00',
      end: '2022-02-21T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2022-02-21T16:00:00',
      end: '2022-02-21T23:59:60',
      color: "pink"
    },
    {
      id: 5,
      title: 'tamar',
      start: '2022-02-21T16:00:00',
      end: '2022-02-21T23:59:60',
      color: "pink"
    },
    {
      id: 1,
      title: 'rivka',
      start: '2022-02-22T00:00:00',
      end: '2022-02-22T07:00:00',
    },
    {
      id: 2,
      title: 'sara',
      start: '2022-02-22T00:00:00',
      end: '2022-02-22T07:00:00',
    },
    {
      id: 3,
      title: 'chana',
      start: '2022-02-22T07:00:00',
      end: '2022-02-22T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'shira',
      start: '2022-02-22T16:00:00',
      end: '2022-02-22T23:59:60',
      color: "pink"
    },
    {
      id: 5,
      title: 'zvi',
      start: '2022-02-22T16:00:00',
      end: '2022-02-22T23:59:60',
      color: "pink"
    },
    {
      id: 1,
      title: 'ruth',
      start: '2022-02-23T00:00:00',
      end: '2022-02-23T07:00:00',
    },
    {
      id: 2,
      title: 'tamar',
      start: '2022-02-23T00:00:00',
      end: '2022-02-23T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2022-02-23T07:00:00',
      end: '2022-02-23T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2022-02-23T16:00:00',
      end: '2022-02-23T23:59:60',
      color: "pink"
    },
    {
      id: 6,
      title: 'levana',  
      start: '2022-02-23T16:00:00',
      end: '2022-02-23T23:59:60',
      color: "pink",
      cursor:'pointer'
    },
    {
      id: 3,
      title: 'chana',
      start: '2022-02-23T07:00:00',
      end: '2022-02-23T16:00:00',
      color: "green"
    },
    {
      id: 1,
      title: 'ruth',
      start: '2022-02-24T00:00:00',
      end: '2022-02-24T07:00:00',
    },
    {
      id: 2,
      title: 'tamar',
      start: '2022-02-24T00:00:00',
      end: '2022-02-24T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2022-02-24T07:00:00',
      end: '2022-02-24T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2022-02-24T16:00:00',
      end: '2022-02-24T23:59:60',
      color: "pink"
    },
    {
      id: 6,
      title: 'levana',  
      start: '2022-02-24T16:00:00',
      end: '2022-02-23T24:59:60',
      color: "pink",
      cursor:'pointer'
    },
    {
      id: 3,
      title: 'chana',
      start: '2022-02-24T07:00:00',
      end: '2022-02-24T16:00:00',
      color: "green"
    },
    {
      id: 1,
      title: 'ruth',
      start: '2022-02-25T00:00:00',
      end: '2022-02-25T07:00:00',
    },
    {
      id: 2,
      title: 'tamar',
      start: '2022-02-25T00:00:00',
      end: '2022-02-25T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2022-02-25T07:00:00',
      end: '2022-02-25T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2022-02-25T16:00:00',
      end: '2022-02-25T23:59:60',
      color: "pink"
    },
    {
      id: 6,
      title: 'levana',  
      start: '2022-02-25T16:00:00',
      end: '2022-02-25T23:59:60',
      color: "pink",
      cursor:'pointer'
    },
    {
      id: 3,
      title: 'chana',
      start: '2022-02-25T07:00:00',
      end: '2022-02-25T16:00:00',
      color: "green"
    },
    {
      id: 1,
      title: 'ruth',
      start: '2022-02-26T00:00:00',
      end: '2022-02-26T07:00:00',
    },
    {
      id: 2,
      title: 'tamar',
      start: '2022-02-26T00:00:00',
      end: '2022-02-26T07:00:00',
    },
    {
      id: 3,
      title: 'shoshana',
      start: '2022-02-26T07:00:00',
      end: '2022-02-26T16:00:00',
      color: "green"
    },
    {
      id: 4,
      title: 'noa',
      start: '2022-02-26T16:00:00',
      end: '2022-02-26T23:59:60',
      color: "pink"
    },
    {
      id: 6,
      title: 'levana',  
      start: '2022-02-26T16:00:00',
      end: '2022-02-26T23:59:60',
      color: "pink",
      cursor:'pointer'
    },
    {
      id: 3,
      title: 'chana',
      start: '2022-02-26T07:00:00',
      end: '2022-02-26T16:00:00',
      color: "green"
    }

    // { id: 3, title: 'event 3', start: '2021-08-27', end: '2021-08-27' },
  ];
  const eventemp=[
    {
      id: 2,
      title: 'רבקי',
      start: '2022-02-22T07:00:00',
      end: '2022-02-22T16:00:00',
    },
    {
      id:2,
      title: 'רבקי',
      start: '2022-02-23T00:00:00',
      end: '2022-02-23T07:00:00',
      color: "green"
    },  {
      id: 2,
      title: 'רבקי',
      start: '2022-02-24T00:00:00',
      end: '2022-02-24T07:00:00',
      color: "green"
    },  {
      id: 2,
      title: 'רבקי',
      start: '2022-02-25T00:00:00',
      end: '2022-02-25T07:00:00',
      color: "pink"
    },  {
      id: 2,
      title: 'רבקי',
      start: '2022-02-26T00:00:00',
      end: '2022-02-26T07:00:00',
      color: "pink"
    },
    {
      id: 2,
      title: 'רבקי',
      start: '2022-02-21T00:00:00',
      end: '2022-02-21T07:00:00',
      color: "pink"
    }
    
  ]
  return (
    <div className="App">
      
      {alert===true&&<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error" dir="rtl">שגיאת מערכת</Alert>
          </Stack>}
      {employee.id===1&&<FullCalendar
        headerToolbar={{
          center: 'dayGridWeek,timeGridDay,listWeek',
        }}
        themeSystem='bootstrap'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin ]}
        theme='bootstrap3'
        initialView="listDay"
        events={events}
        nowIndicator
        eventClick={(e)=>handleClickOpenEmployee(e.el.fcSeg.eventRange.instance.range,e.el.fcSeg.eventRange.def.publicId)}
        eventMouseEnter={console.log('mm')}
        variant="outlined"
      />}
      
     {employee.id!==1&&<FullCalendar
        headerToolbar={{
          center: 'dayGridWeek,timeGridDay',
        }}
        themeSystem='bootstrap'
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
        theme='bootstrap3'
        initialView="listWeek"
        events={eventemp}
        nowIndicator
        eventClick={(e)=>handleClickOpenEmployee(e.el.fcSeg.eventRange.instance.range,e.el.fcSeg.eventRange.def.publicId)}
        eventMouseEnter={console.log('mm')}
        variant="outlined"
      />}
      <Dialog 
        fullScreen={fullScreen}
        open={open}
        onClose={handleCloseEmployee}
        aria-labelledby="responsive-dialog-title"
        align='right'
      >
        <img style={{height:'100px',width:'400px'}} src={image7} />
        <DialogTitle id="responsive-dialog-title" style={{color:"blue"} } >
          {clickUser.employeeFirstName} {clickUser.employeeLastName}
        </DialogTitle>
        <DialogContent >
          <DialogContentText style={{color:"rgb(182, 77, 112)"} } > 
            {clickUser.employeePhone}
            <br />
            {clickUser.employeeEmail}
            <br />
            :שעות משמרת <div style={{color:"rgb(182, 77, 112)"} } >{moment(moment(TimeShift.start, "h:mm a").diff(moment('02:00:00', "h:mm a"))).utc().format('h:mm a')} - {moment(moment(TimeShift.end, "h:mm a").diff(moment('02:00:00', "h:mm a"))).utc().format('h:mm a')}</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button onClick={handleCloseEmployee} autoFocus style={{backgroundColor:"rgb(182, 77, 112)",color:"lightblue",margin:'15px'}}>
            סגירה
          </Button>
        </DialogActions>
        <img style={{height:'100px',width:'400px'}} src={image6} />
      </Dialog>
    </div>
  );
 
}export default connect(mapStateToProps)(FullCalendarApp)